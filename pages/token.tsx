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
import { axiosBase } from '../unify/const'

export default function Detail() {

  const getToken = () => {
      return axiosBase.get(`/token`)
          .then((res) => {
            console.log("sendRegister res----------------------" + JSON.stringify(res))
              if (typeof window !== 'undefined') {
                console.log("fafa")
                // Perform localStorage action
                const token = localStorage.getItem('token')
                localStorage.setItem('token', res.data)
              }
          })
          // Go側でエラーがあった場合
          .catch((err) => {
              console.log("err--------------------------" + JSON.stringify(err))
              return false
          });
  };
  getToken()

}