import Link from 'next/link'

import styles from '../../../styles/Home.module.css'
import { detailListArg } from '../../../unify/obj'

export default function List(props: detailListArg) {
    // keyはユニークIDとして付与している
    return <div className={`${styles.detailContainer}`}>
        <h1>詳細画面</h1>
        <div>
            <p>シチュエーション</p>
            <span className={styles.listName}>{props.data.Mst_situationName}</span>
            <p>曲名</p>
            <span className={styles.listName}>{props.data.Name}</span>
            <p>歌手名</p>
            <span className={styles.listName}>{props.data.Artist}</span>
            <p>おすすめポイント</p>
            <span className={styles.listName}>{props.data.Reason}</span>
            <p>投稿日</p>
            <span className={styles.listName}>{props.createdAt}</span>
        </div>
        <br></br>
        <Link href="/">
            <a>トップ画面へ戻る</a>
        </Link>
    </div>

}