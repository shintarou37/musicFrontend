import { render, screen } from "@testing-library/react";

import { MusicObj } from '../unify/obj'

import Home from '../pages/index'
import UsersSignIn from '../pages/users/signin'
import UsersSignUp from '../pages/users/signup'

const MusicObj: MusicObj = {Artist: "1", ID: 1, Mst_situationName: "1つ目です", Name: "名前です", Reason: "理由です", UserName: "UserName"};

describe("Home", () => {
  it("Home 表示されること", () => {
    render(<Home/>);
    // screen.debug();
    expect(screen.getByText("オンレコ")).toBeTruthy();
    expect(screen.getByText("投稿フォーム")).toBeTruthy();

    expect(screen.getByRole("button")).toBeTruthy();

  });
});

describe("Usersディレクトリ", () => {
  it("UsersSignIn 表示されること", () => {
    render(<UsersSignIn />);

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

  it("UsersSignUp 表示されること", () => {
    render(<UsersSignUp />);
    
    expect(screen.getByText("オンレコ")).toBeTruthy();
    expect(screen.getByText("新規登録")).toBeTruthy();
    expect(screen.getByText("ログイン")).toBeTruthy();
    expect(screen.getByText("登録画面")).toBeTruthy();
    expect(screen.getByText("登録する")).toBeTruthy();
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