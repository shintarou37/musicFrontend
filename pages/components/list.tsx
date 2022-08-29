import Link from 'next/link'

import styles from '../../styles/Home.module.css'
import { listArg, MusicObj } from '../../unify/const'

export default function List(props: listArg) {
    const musics = props.music.map((value: MusicObj, key: number) => {
        let detalPath = `/detal/?id=${value.ID}`;
        // keyはユニークIDとして付与している
        return <div key={key} className={styles.list}>
            <p>シチュエーション</p>
            <span className={styles.listName}>{value.Mst_situationName}</span>
            <p>曲名</p>
            <span className={styles.listName}>{value.Name}</span>
            <p>歌手名</p>
            <span className={styles.listName}>{value.Artist}</span>
            <p>おすすめポイント</p>
            <span className={styles.listName}>{value.Reason}</span><br></br>
            <Link href={detalPath}>
                <a>詳細</a>
            </Link>
        </div>
    })
    return <div className={styles.listContent}>
        {musics}
    </div>

}