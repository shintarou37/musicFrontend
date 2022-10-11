import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { apiURL } from '../unify/const'
import { SituationObj } from '../unify/obj'
import { sendRegister } from '../unify/func'
import Header from '../components/header'
import Search from '../components/index/search'
import Register from '../components/index/register'
import List from '../components/index/list'

const Home: NextPage = () => {
  const fetcher = async (address: string) => {
    const res = await fetch(address);

    // もしステータスコードが 200-299 の範囲内では無い場合はエラーページに遷移する
    if (!res.ok) {
      router.push("/_error");
    }
    return res.json();
  }

  const router = useRouter();
  const [name, setName] = useState('');
  const [artist, setArtist] = useState('');
  const [reason, setReason] = useState('');
  const [situation, setSituation] = useState('1');
  const [search, setSearch] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [isNew, setIsNew] = useState(false);
  const { data, error } = useSWR(`${apiURL}?&search=${search}`, fetcher)

  // 投稿ファームのselectタグ生成
  let situations;
  let Mst_situation;
  if (data) {
    Mst_situation = data.Mst_situation;
    situations = Mst_situation.map((value: SituationObj, key: number) => {
      // keyはユニークIDとして付与している
      return <option value={value.ID} key={key}>{value.Name}</option>
    })
  }

  return (
    <div >
      <Header />
      {/* 検索欄 */}
      {Mst_situation &&
        <Search Mst_situation={Mst_situation} search={search} setSearch={setSearch} />
      }
      <div className={styles.container}>
      {!isNew &&
        <button className={styles.new} onClick={() => { isNew ? setIsNew(false) : setIsNew(true); }}>投稿フォーム</button>
      }
        <main className={styles.main}>
          {/* エラーメッセージ */}
          {errMessage &&
            <p>{errMessage}</p>
          }

          {/* 投稿フォーム */}
          {isNew &&
            <Register situations={situations} setSituation={setSituation} name={name} setName={setName} artist={artist} setArtist={setArtist} reason={reason} setReason={setReason} sendRegister={sendRegister} setIsNew={setIsNew} situation={situation} setErrMessage={setErrMessage} search={search} />
          }

          {/* 一覧 */}
          {data &&
            <List music={data.Music} />
          }
        </main>
      </div>
    </div>
  )
}

export default Home