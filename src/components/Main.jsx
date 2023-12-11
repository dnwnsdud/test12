import Contents from "./Contents";
import Header from "./Header";
import "../css/common.css";
import "../css/reset.css";
// 연습
import Member from "./Member";
// 연습

export default function Main() {
  return (
    <>
      <Header />
      <Contents />
      {/* <Member memberName={"길동"} nickName={"개발자"} /> */}
    </>
  );
}
