import styles from '../../styles/Home.module.css'
import { IsNew } from '../../unify/const'
export default function Search(props: any) {
    // console.log("--------------------------------------- s ")
    // console.log("situation---------------------------------------  " + JSON.stringify(props.Mst_situation))
    const search = props.Mst_situation.map((value: any, key: number)=> {
        return <button className={styles.item} key={key} value={value.ID} onClick={(e) => console.log(e.target.value) }>{value.Name}</button>
    })
  return (
    <div className={styles.contents}>
        {search}
    </div>
        
  )
}