import Link from 'next/link'
import useSWR, { useSWRConfig } from 'swr'
import { useRouter } from 'next/router'
import { useState } from 'react'
import moment from 'moment';
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { apiURL } from '../unify/const'
import Header from '../components/header'
import List from '../components/details/list'

export default function Detail() {
  const router = useRouter();

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
  if(data){
    const createdAt = moment(data.CreatedAt)
    return (
      <div>
        <Header/>
        <List data={data} createdAt={createdAt.format('YYYY/MM/DD HH:mm')}/>
      </div>
    )
  }
}