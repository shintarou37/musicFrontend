import Link from 'next/link'

import styles from '../../styles/Home.module.css'
import { detailListArg } from '../../unify/obj'

export default function List(props: detailListArg) {
    // keyはユニークIDとして付与している
    return <div className={`${styles.detailContainer}`}>
        <h1>詳細画面</h1>
        <div>
            <p className={styles.fw_bold}>シチュエーション</p>
            <span>{props.data.Mst_situationName && props.data.Mst_situationName}</span>
            <p className={styles.fw_bold}>曲名</p>
            <span>{props.data.Name}</span>
            <p className={styles.fw_bold}>歌手名</p>
            <span>{props.data.Artist}</span>
            <p className={styles.fw_bold}>おすすめポイント</p>
            <span>{props.data.Reason}</span>
            <p className={styles.fw_bold}>投稿日</p>
            <span>{props.createdAt}</span>
        </div>
        <br></br>
        <Link href="/">
            <p className={styles.topBtn}>トップ画面へ戻る</p>
        </Link>
    </div>

}