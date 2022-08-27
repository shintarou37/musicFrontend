import styles from '../../styles/Home.module.css'
import { registerArg } from '../../unify/const'

export default function Register(props: registerArg) {

  return (
    <div>
    <h1>投稿フォーム</h1>
    <label>シチュエーション</label>
    <select onChange={(e) => props.setSituation(e.target.value)}>
      {props.situations}
    </select>
    <br></br>
    <label>曲名（1 ~ 100文字）</label>
    <input type="text" name="name" value={props.name} onChange={(e) => props.setName(e.target.value)}/><br></br>
    <label>歌手名（1 ~ 100文字）</label>
    <input type="text" name="content" value={props.artist} onChange={(e) => props.setArtist(e.target.value)}/><br></br>
    <label>おすすめポイント（1 ~ 1000文字）</label>
    <input type="text" name="content" value={props.reason} onChange={(e) => props.setReason(e.target.value)}/><br></br>
    <button type="submit" onClick={props.sendRegister}>送信</button><br></br>
  </div>
  )
}