import Link from 'next/link'

import styles from '../../styles/Home.module.css'
import { listArg, MusicObj } from '../../unify/obj'

export default function List(props: listArg) {
    const musics = props.music.map((value: MusicObj, key: number) => {
        let detalPath = `/detal/?id=${value.ID}`;
        let Reason =  value.Reason;
        if(value.Reason.length > 100){
            Reason = value.Reason.slice(0, 100);
            Reason += "...";
        }
        
        // keyはユニークIDとして付与している
        return <div key={key} className={styles.list}>
            <p className={styles.listName}>シチュエーション</p>
            <span className={styles.breakWord}>{value.Mst_situationName}</span>
            <p className={styles.listName}>曲名</p>
            <span className={styles.breakWord}>{value.Name}</span>
            <p className={styles.listName}>歌手名</p>
            <span className={styles.breakWord}>{value.Artist}</span>
            <p className={styles.listName}>おすすめポイント</p>
            <span className={styles.breakWord}>{Reason}</span><br></br>
            <Link href={detalPath}>
                <p className={styles.detailBtn}>詳細</p>
            </Link>
        </div>
    })
    return <div className={styles.listContent}>
        {musics}
    </div>
}