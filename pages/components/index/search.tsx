import styles from '../../../styles/Home.module.css'
import { SituationObj, searchArg } from '../../../unify/obj'

export default function Search(props: searchArg) {
  const search = props.Mst_situation.map((value: SituationObj, key: number) => {
    return <button className={`${styles.item} ${Number(props.search) == value.ID ? styles.select : ""}`} key={key} value={value.ID} onClick={(e) => {
      props.setSearch(e.currentTarget.value)
    }}>{value.Name}</button>
  })
  return (
    <div className={styles.contents}>
      {search}
    </div>
  )
}