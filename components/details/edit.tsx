import styles from '../../styles/Home.module.css'
import { registerArg } from '../../unify/obj'
import { sendUpdate } from '../../unify/func'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import { apiURL, axiosBase } from '../../unify/const'
import { SituationObj, editArg } from '../../unify/obj'
import { validateRegister } from '../../unify/validate'
import { useState } from 'react'

export default function Edit(props: editArg) {
  let situations;
  let Mst_situation;
  Mst_situation = props.data.Mst_situation;
  situations = Mst_situation.map((value: SituationObj, key: number) => {
    return <option value={value.ID} key={key}>{value.Name}</option>
  })
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [name, setName] = useState(props.data.Music.Name);
  const [artist, setArtist] = useState(props.data.Music.Artist);
  const [reason, setReason] = useState(props.data.Music.Reason);
  const [situation, setSituation] = useState(props.data.Music.Mst_situationID);

  return (
    <div>
      <span className={styles.postClose} onClick={() => { props.setisEdit(false) }}>✖️</span>
      <label className={styles.fw_bold}><span className={styles.red}>※ </span>シチュエーション</label><br></br>
      <select className={styles.situation} onChange={(e) => setSituation(e.target.value)}>
        {situations}
      </select>
      <br></br>
      <label className={styles.fw_bold}><span className={styles.red}>※ </span>曲名（1 ~ 100文字）</label><br></br>
      <input className={styles.postInput} type="text" value={name} onChange={(e) => setName(e.target.value)} /><br></br>
      <label className={styles.fw_bold}><span className={styles.red}>※ </span>歌手名（1 ~ 100文字）</label><br></br>
      <input className={styles.postInput} type="text" value={artist} onChange={(e) => setArtist(e.target.value)} /><br></br>
      <label className={styles.fw_bold}>おすすめポイント（1 ~ 1000文字）</label><br></br>
      <textarea className={styles.postTextArea} value={reason} onChange={(e) => setReason(e.target.value)}></textarea><br></br>
      <button className={styles.postBtm} type="submit" onClick={
        async () => {
          // バリデーション
          const retValidate: boolean = validateRegister(name, artist, reason, props.setErrMessage)
          if (!retValidate) {
            return
          }

          // 更新
          const ret: number = await sendUpdate(props.data.Music.ID, name, artist, reason, situation)
          if (ret == 200) {
            setName("");
            setReason("");
            setArtist("");
            props.setErrMessage("");
            props.setisEdit(false);
            mutate(`${apiURL}/detail?id=${props.data.Music.ID}`);
          }
          else if(ret == 400){
            router.push("/_error");
          }
          else if(ret == 401){
            router.push("/users/signin");
          }

        }
      }>更新する</button>
    </div>
  )
}