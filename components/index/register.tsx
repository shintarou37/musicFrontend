import styles from '../../styles/Home.module.css'
import { registerArg } from '../../unify/obj'
import { sendRegister } from '../../unify/func'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import { apiURL, axiosBase } from '../../unify/const'
import { validateRegister } from '../../unify/validate'

export default function Register(props: registerArg) {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  return (
    <div>
      <label>シチュエーション</label><br></br>
      <select className={styles.situation} onChange={(e) => props.setSituation(e.target.value)}>
        {props.situations}
      </select>
      <br></br>
      <label>曲名（1 ~ 100文字）</label><br></br>
      <input className={styles.postInput} type="text" value={props.name} onChange={(e) => props.setName(e.target.value)} /><br></br>
      <label>歌手名（1 ~ 100文字）</label><br></br>
      <input className={styles.postInput} type="text" value={props.artist} onChange={(e) => props.setArtist(e.target.value)} /><br></br>
      <label>おすすめポイント（1 ~ 1000文字）</label><br></br>
      <textarea className={styles.postInput} value={props.reason} onChange={(e) => props.setReason(e.target.value)}></textarea><br></br>
      <button className={styles.postBtm} type="submit" onClick={
        async () => {
          // バリデーション
          const retValidate: boolean = validateRegister(props.name, props.artist, props.reason, props.setErrMessage)
          if(!retValidate){
            return
          }

          // 登録
          const ret: boolean = await sendRegister(props.name, props.artist, props.reason, props.situation)
          if (ret == true) {
            props.setName("");
            props.setReason("");
            props.setArtist("");
            props.setErrMessage("");
            mutate(`${apiURL}?&search=${props.search}`);
          }
          else {
            router.push("/_error");
          }
          
        }
      }>投稿する</button>
      <span className={styles.postClose} onClick={() => { props.setIsNew(false) }}>✖️</span>
    </div>
  )
}