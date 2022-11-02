import styles from '../../styles/Home.module.css'
import styleUsers from '../../styles/components/Users.module.css'
import { sendSignIn } from '../../unify/func'
import { useRouter } from 'next/router'
import { validateSignUp } from '../../unify/validate'
import { useState } from 'react'
import Link from 'next/link'

export default function SignInForm() {
    const router = useRouter();
    const [errMessage, setErrMessage] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styleUsers.main}>
            <h1>ログイン画面</h1>
            {/* エラーメッセージ */}
            {errMessage &&
                <p className={styles.red}>{errMessage}</p>
            }
            <label className={styles.fw_bold}><span className={styles.red}>※ </span>名前（1 ~ 10文字）</label><br></br>
            <input className={styles.postInput} type="text" value={name} onChange={(e) => setName(e.target.value)} /><br></br>
            <label className={styles.fw_bold}><span className={styles.red}>※ </span>パスワード（8 ~ 16文字）</label><br></br>
            <input className={styles.postInput} type="text" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
            <button className={styleUsers.postBtm} type="submit" onClick={
                async () => {
                    // バリデーション
                    setErrMessage("")
                    const retValidate: boolean = validateSignUp(name, password, setErrMessage)
                    if (!retValidate) {
                        return
                    }

                    // 登録
                    const ret: number = await sendSignIn(name, password);
                    if (ret == 200) {
                        router.push("/");
                    }
                    else if (ret == 401) {
                        setErrMessage("名前が存在しません。")
                    }
                    else if (ret == 406) {
                        setErrMessage("パスワードが異なります。")
                    }

                }
            }>ログイン</button>
            <br></br>
            <Link href="/">
                <p className={styleUsers.topBtn}>トップ画面へ戻る</p>
            </Link>
        </div>
    )
}