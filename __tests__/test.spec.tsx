import List from '../components/index/list'
import DetailList from '../components/details/list'
import Register from '../components/index/register'
import { listArg, MusicObj, detailListArg } from '../unify/obj'
import Header from '../components/header'
import Home from '../pages/index'
import { render, screen } from "@testing-library/react";

const music: any = [{Artist: "1", ID: 1, Mst_situationName: "1つ目です", Name: "名前です", Reason: "理由です"}]
const situations: any = [{ID: 1,  Name: "名前です"}]
const setFunction = (()=>{})
const MusicObj: MusicObj = {Artist: "1", ID: 1, Mst_situationName: "1つ目です", Name: "名前です", Reason: "理由です"};


describe("Header", () => {
  it("Header 表示されること", () => {
    render(<Header />);
    // screen.debug();

    expect(screen.getByText("オンレコ")).toBeTruthy();
  });
});

describe("Home", () => {
  it("Home 表示されること", () => {
    render(<Home/>);

    expect(screen.getByText("オンレコ")).toBeTruthy();
    expect(screen.getByText("投稿フォーム")).toBeTruthy();

    expect(screen.getByRole("button")).toBeTruthy();

  });
});

describe("LIST", () => {
  it("LIST 表示されること", () => {
    render(<List music={music}/>);

    expect(screen.getByText("1つ目です")).toBeTruthy();
    expect(screen.getByText("名前です")).toBeTruthy();
    expect(screen.getByText("理由です")).toBeTruthy();
    expect(screen.getByText("シチュエーション")).toBeTruthy();
    expect(screen.getByText("曲名")).toBeTruthy();
    expect(screen.getByText("歌手名")).toBeTruthy();
    expect(screen.getByText("おすすめポイント")).toBeTruthy();
    expect(screen.getByText("詳細")).toBeTruthy();

  });
});

describe("Register", () => {
  it("Register 表示されること", () => {
    render(<Register situations={"situations"} setSituation={setFunction} name={"name"} setName={setFunction} artist={"artist"} setArtist={setFunction} 
    reason={"reason"} setReason={setFunction} sendRegister={situations} setIsNew={setFunction} situation={situations} setErrMessage={setFunction} search={"search"}/>);

    expect(screen.getByText("シチュエーション")).toBeTruthy();
    expect(screen.getByText("曲名（1 ~ 100文字）")).toBeTruthy();
    expect(screen.getByText("歌手名（1 ~ 100文字）")).toBeTruthy();
    expect(screen.getByText("おすすめポイント（1 ~ 1000文字）")).toBeTruthy();
    expect(screen.getByText("投稿する")).toBeTruthy();

    expect(screen.getAllByRole("textbox")[0]).toBeTruthy();
    expect(screen.getAllByRole("textbox")[1]).toBeTruthy();
    expect(screen.getAllByRole("textbox")[2]).toBeTruthy();
    // selectタグ
    expect(screen.getByRole("combobox")).toBeTruthy();
    expect(screen.getByRole("button")).toBeTruthy();

  });
});

describe("DetailList", () => {
  it("DetailList 表示されること", () => {
    render(<DetailList data={MusicObj} createdAt={"2000/01/01 11:11"}/>);
    
    expect(screen.getByText("1つ目です")).toBeTruthy();
    expect(screen.getByText("名前です")).toBeTruthy();
    expect(screen.getByText("理由です")).toBeTruthy();
    expect(screen.getByText("シチュエーション")).toBeTruthy();
    expect(screen.getByText("曲名")).toBeTruthy();
    expect(screen.getByText("歌手名")).toBeTruthy();
    expect(screen.getByText("おすすめポイント")).toBeTruthy();

    expect(screen.getByRole("heading")).toBeTruthy();
  });
});