import Link from 'next/link'
import useSWR, { useSWRConfig } from 'swr'
import { useRouter } from 'next/router'
import { useState } from 'react'
import moment from 'moment';
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { apiURL } from '../unify/const'
import Header from './components/header'

export default function Detail() {
  const router = useRouter();

  // クエリパラメーターを取得する
  let { id } = router.query;

  // fetcher関数の第一引数にはuseSWRの第一引数が入る
  const fetcher = async (address: string) => {
    const res = await fetch(address);
    console.log("---------------------------------------  " + res.status)
    // もしステータスコードが 200-299 の範囲内では無い場合はエラーページに遷移する
    if (!res.ok) {
      router.push("/_error");
    }
  
    return res.json();
  }

  const { data, error } = useSWR(`${apiURL}/detail?id=${id}`, fetcher);

  // dataがない場合に戻り値を渡すと一瞬レイアウトが崩れる
  if(data){
    const createdAt = moment(data.CreatedAt)
    return (
      <div>
        <Header/>
        <div className={`${styles.detailContainer}`}>
          <h1>詳細画面</h1>
          {data ? 
            <div>
              <p>シチュエーション</p>
              <span className={styles.listName}>{data.Mst_situationName}</span>
              <p>曲名</p>
              <span className={styles.listName}>{data.Name}</span>
              <p>歌手名</p>
              <span className={styles.listName}>{data.Artist}</span>
              <p>おすすめポイント</p>
              <span className={styles.listName}>{data.Reason}</span>
              <p>投稿日</p>
              <span className={styles.listName}>{createdAt.format('YYYY/MM/DD HH:mm')}</span>
            </div>
            :
              <p></p>
            }
          <br></br>
          <Link href="/">
              <a>トップ画面へ戻る</a>
          </Link>
        </div>
      </div>
    )
  }
}