import { render, screen } from "@testing-library/react";

import { MusicObj } from '../unify/obj'

import Header from '../components/header'
import IndexList from '../components/index/list'
import IndexRegister from '../components/index/register'
import DetailsList from '../components/details/list'
import UsersSignUp from '../components/users/signupForm'
import UsersSignIn from '../components/users/signinForm'

const music: any = [{Artist: "1", ID: 1, Mst_situationName: "1つ目です", Name: "名前です", Reason: "理由です"}]
const situations: any = [{ID: 1,  Name: "名前です"}]
const setFunction = (()=>{})
const MusicObj: MusicObj = {Artist: "1", ID: 1, Mst_situationName: "1つ目です", Name: "名前です", Reason: "理由です", UserName: "UserName"};

describe("Header ファイル", () => {
  it("header 表示されること", () => {
    render(<Header />);
    // screen.debug();

    expect(screen.getByText("オンレコ")).toBeTruthy();
  });
});

describe("indexディレクトリ", () => {
  it("IndexList 表示されること", () => {
    render(<IndexList music={music}/>);

    expect(screen.getByText("1つ目です")).toBeTruthy();
    expect(screen.getByText("名前です")).toBeTruthy();
    expect(screen.getByText("理由です")).toBeTruthy();
    expect(screen.getByText("シチュエーション")).toBeTruthy();
    expect(screen.getByText("曲名")).toBeTruthy();
    expect(screen.getByText("歌手名")).toBeTruthy();
    expect(screen.getByText("おすすめポイント")).toBeTruthy();
    expect(screen.getByText("詳細")).toBeTruthy();
  });

  it("IndexRegister 表示されること", () => {
    render(<IndexRegister situations={"situations"} setSituation={setFunction} name={"name"} setName={setFunction} artist={"artist"} setArtist={setFunction} 
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


describe("detailsディレクトリ", () => {
  it("DetailsList 表示されること", () => {
    render(<DetailsList data={MusicObj} createdAt={"2000/01/01 11:11"} updatedAt={"3000/12/30 00:00"}/>);
    screen.debug();

    expect(screen.getByText("詳細画面")).toBeTruthy();

    expect(screen.getByText("シチュエーション")).toBeTruthy();
    expect(screen.getByText("1つ目です")).toBeTruthy();

    expect(screen.getByText("曲名")).toBeTruthy();
    expect(screen.getByText("名前です")).toBeTruthy();

    expect(screen.getByText("歌手名")).toBeTruthy();
    expect(screen.getByText("1")).toBeTruthy();

    expect(screen.getByText("おすすめポイント")).toBeTruthy();
    expect(screen.getByText("理由です")).toBeTruthy();

    expect(screen.getByText("投稿者")).toBeTruthy();
    expect(screen.getByText("UserName")).toBeTruthy();
    expect(screen.getByText("投稿日")).toBeTruthy();
    expect(screen.getByText("2000/01/01 11:11")).toBeTruthy();
    expect(screen.getByText("更新日")).toBeTruthy();
    expect(screen.getByText("3000/12/30 00:00")).toBeTruthy();

    expect(screen.getByText("トップ画面へ戻る")).toBeTruthy();

    expect(screen.getByRole("heading")).toBeTruthy();
  });
});

describe("usersディレクトリ", () => {
  it("UsersSignIn 表示されること", () => {
    render(<UsersSignIn />);
    
    expect(screen.getByText("名前（1 ~ 10文字）")).toBeTruthy();
    expect(screen.getByText("パスワード（8 ~ 16文字）")).toBeTruthy();
    expect(screen.getByText("ログイン")).toBeTruthy();
    expect(screen.getByText("トップ画面へ戻る")).toBeTruthy();

    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getAllByRole("textbox")[0]).toBeTruthy();
    expect(screen.getAllByRole("textbox")[1]).toBeTruthy();
  });

  it("UsersSignUp 表示されること", () => {
    render(<UsersSignUp />);
    
    expect(screen.getByText("名前（1 ~ 10文字）")).toBeTruthy();
    expect(screen.getByText("パスワード（8 ~ 16文字）")).toBeTruthy();
    expect(screen.getByText("登録する")).toBeTruthy();
    expect(screen.getByText("トップ画面へ戻る")).toBeTruthy();

    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getAllByRole("textbox")[0]).toBeTruthy();
    expect(screen.getAllByRole("textbox")[1]).toBeTruthy();
  });
});