import List from '../components/index/list'
import DetailList from '../components/details/list'
import Register from '../components/index/register'
import SignInForm from '../components/users/signinForm'
import SignUpForm from '../components/users/signupForm'
import { listArg, MusicObj, detailListArg } from '../unify/obj'
import Header from '../components/header'
import Home from '../pages/index'
import PageFormSign from '../pages/users/signin'
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

describe("UserSignIn", () => {
  it("DetailList 表示されること", () => {
    render(<SignInForm />);
    
    expect(screen.getByText("名前（1 ~ 10文字）")).toBeTruthy();
    expect(screen.getByText("パスワード（8 ~ 16文字）")).toBeTruthy();
    expect(screen.getByText("ログイン")).toBeTruthy();
    expect(screen.getByText("トップ画面へ戻る")).toBeTruthy();

    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getAllByRole("textbox")[0]).toBeTruthy();
    expect(screen.getAllByRole("textbox")[1]).toBeTruthy();
  });
});

describe("UserSignUp", () => {
  it("SignUpForm 表示されること", () => {
    render(<SignUpForm />);
    
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

describe("UserSignIn", () => {
  it("UserSignIn 表示されること", () => {
    render(<SignInForm />);
    
    expect(screen.getByText("名前（1 ~ 10文字）")).toBeTruthy();
    expect(screen.getByText("パスワード（8 ~ 16文字）")).toBeTruthy();
    expect(screen.getByText("ログイン")).toBeTruthy();
    expect(screen.getByText("トップ画面へ戻る")).toBeTruthy();

    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getAllByRole("textbox")[0]).toBeTruthy();
    expect(screen.getAllByRole("textbox")[1]).toBeTruthy();
  });
});

describe("FormSign", () => {
  it("FormSign 表示されること", () => {
    render(<PageFormSign />);

    expect(screen.getByText("オンレコ")).toBeTruthy();
    expect(screen.getByText("新規登録")).toBeTruthy();
    expect(screen.getAllByText("ログイン")).toHaveLength(2);
    expect(screen.getByText("ログイン画面")).toBeTruthy();
    expect(screen.getByText("名前（1 ~ 10文字）")).toBeTruthy();
    expect(screen.getByText("パスワード（8 ~ 16文字）")).toBeTruthy();
    expect(screen.getByText("トップ画面へ戻る")).toBeTruthy();

    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getAllByRole("link")[0]).toBeTruthy();
    expect(screen.getAllByRole("link")[1]).toBeTruthy();
    expect(screen.getAllByRole("link")[2]).toBeTruthy();
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getAllByRole("textbox")[0]).toBeTruthy();
    expect(screen.getAllByRole("textbox")[1]).toBeTruthy();
  });
});