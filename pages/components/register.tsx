import styles from '../../styles/Home.module.css'
import { registerArg } from '../../unify/obj'
import { sendRegister } from '../../unify/func'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import { apiURL, axiosBase } from '../../unify/const'

export default function Register(props: registerArg) {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  return (
    <div>
      <label>シチュエーション</label><br></br>
      <select className={styles.situation} onChange={(e) => props.setSituation(e.target.value)}>
        {props.situations}
      </select>
      <br></br>
      <label>曲名（1 ~ 100文字）</label><br></br>
      <input className={styles.postInput} type="text" value={props.name} onChange={(e) => props.setName(e.target.value)} /><br></br>
      <label>歌手名（1 ~ 100文字）</label><br></br>
      <input className={styles.postInput} type="text" value={props.artist} onChange={(e) => props.setArtist(e.target.value)} /><br></br>
      <label>おすすめポイント（1 ~ 1000文字）</label><br></br>
      <textarea className={styles.postInput} value={props.reason} onChange={(e) => props.setReason(e.target.value)}></textarea><br></br>
      <button className={styles.postBtm} type="submit" onClick={
        async () => {
          let errMessageTpm = "";
          if (props.name.length == 0 || props.name.length >= 101) {
            errMessageTpm += "曲名を0 ~ 100文字で入力してください。"
          }
          if (props.artist.length == 0 || props.artist.length >= 101) {
            errMessageTpm += "歌手名を0 ~ 100文字で入力してください。"
          }
          if (props.reason.length >= 1001) {
            errMessageTpm += "おすすめポイントを1000文字以内で入力してください。"
          }
          if (errMessageTpm != "") {
            props.setErrMessage(errMessageTpm)
            return
          }
          const ret: boolean = await sendRegister(props.name, props.artist, props.reason, props.situation)
          if (ret == true) {
            props.setName("");
            props.setReason("");
            props.setArtist("");
            props.setErrMessage("")
            mutate(`${apiURL}?&search=${props.search}`);
          }
          else {
            router.push("/_error");
          }
        }
      }>投稿する</button>
      <span className={styles.postClose} onClick={() => { props.setIsNew(false) }}>✖️</span>
    </div>
  )
}