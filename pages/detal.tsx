import useSWR, { useSWRConfig } from 'swr'
import { useRouter } from 'next/router'
import { useState } from 'react'
import moment from 'moment';
import styles from '../styles/Home.module.css'
import { apiURL } from '../unify/const'
import Header from '../components/header'
import List from '../components/details/list'
import Edit from '../components/details/edit'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export default function Detail() {
  const router = useRouter();

  const [isEdit, setisEdit] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const cookies = parseCookies();

  // クエリパラメーターを取得する
  const { id } = router.query;

  // fetcher関数の第一引数にはuseSWRの第一引数が入る
  const fetcher = async (address: string) => {
    const res = await fetch(address);
    // もしステータスコードが 200-299 の範囲内では無い場合はエラーページに遷移する
    if (!res.ok) {
      router.push("/_error");
    }

    return res.json();
  }

  const { data, error } = useSWR(`${apiURL}/detail?id=${id}`, fetcher);

  // dataがない場合に戻り値を渡すと一瞬レイアウトが崩れる
  if (data) {
    // 登録・更新日時のフォーマットを整える
    const createdAt = moment(data.Music.CreatedAt);
    const updatedAt = moment(data.Music.UpdatedAt);
    return (
      <div>
        <Header />

        {/* 編集フォームボタン */}
        {(!isEdit && cookies.token && cookies.id == data.Music.UserID) &&
          <button className={styles.new} onClick={() => { isEdit ? setisEdit(false) : setisEdit(true); }}>投稿を編集</button>
        }
        {/* エラーメッセージ */}
        {errMessage &&
          <p className={styles.red}>{errMessage}</p>
        }
        {/* 編集フォーム */}
        {(isEdit && cookies.token && cookies.id == data.Music.UserID) &&
          <Edit data={data} setisEdit={setisEdit} setErrMessage={setErrMessage} />
        }
        <List data={data.Music} createdAt={createdAt.format('YYYY/MM/DD HH:mm')} updatedAt={updatedAt.format('YYYY/MM/DD HH:mm')} />
      </div>
    )
  }
}