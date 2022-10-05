import List from '../components/index/list'
import { listArg, MusicObj } from '../unify/obj'
import Header from '../components/header'
import Home from '../pages/index'
import { render, screen } from "@testing-library/react";

const music: any = [{Artist: "1", ID: 1, Mst_situationName: "1つ目です", Name: "名前です", Reason: "理由です"}]

describe("Header", () => {
  it("表示されること", () => {
    render(<Header />);

    expect(screen.getByText("オンレコ")).toBeTruthy();
  });
});

describe("Home", () => {
  it("表示されること", () => {
    render(<Home/>);

    expect(screen.getByText("投稿する")).toBeTruthy();
  });
});

describe("LIST", () => {
  it("表示されること", () => {
    render(<List music={music}/>);

    expect(screen.getByText("1つ目です")).toBeTruthy();
    expect(screen.getByText("名前です")).toBeTruthy();
    expect(screen.getByText("理由です")).toBeTruthy();
  });
});