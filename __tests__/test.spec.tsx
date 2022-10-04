import Header from '../components/header'
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("表示されること", () => {
    render(<Header />);

    // テキストを利用してテスト対象を抽出する方法
    expect(screen.getByText("オンレコ")).toBeTruthy();
  });
});