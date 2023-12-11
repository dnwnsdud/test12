import { useState } from "react";
import List from "./List";
import Nolist from "./Nolist";
import { list } from "./Test";
import Modal from "./Modal";
export default function Contents() {
  let [item, setItem] = useState(list);
  let [isActive, setIsActive] = useState(false);
  let [titleNum, setTitleNum] = useState();
  let [inputText, setInputText] = useState("");

  let toggleModal = () => {
    setIsActive(!isActive);
  };
  let openModal = (i) => {
    setIsActive(true);
    setTitleNum(i);
  };
  let closeModal = () => {
    setIsActive(false);
  };
  let addItem = () => {
    let copy = [...item];
    copy.unshift(inputText);
    setItem(copy);
    setInputText("");
  };
  let deleteItem = (i) => {
    let copy = [...item];
    copy.splice(i, 1);
    setItem(copy);
  };
  // let item = [1, 2, 3, 4] // useState에서 받아온 초기 데이터 값
  // let setItem = () => { } // item 정보의 수정을 도와주는 변경함수
  // console.log(item);
  return (
    <div className="main">
      <div className="inputBox">
        <input
          value={inputText}
          placeholder="가고싶은 여행지를 등록하세요"
          type="text"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button onClick={addItem}>add</button>
      </div>
      <p className="count">
        <span>total</span>
        <strong>{item.length}</strong>
      </p>
      {item.length === 0 ? (
        <Nolist />
      ) : (
        <ul className="listCon">
          {item.map((list, i) => {
            // console.log(list, i);
            return (
              <List
                list={list}
                i={i}
                key={i}
                openModal={openModal}
                deleteItem={deleteItem}
              />
            );
          })}
        </ul>
      )}
      {/* {isActive === true ? <Modal /> : null} */}
      {isActive && (
        <Modal item={item} titleNum={titleNum} closeModal={closeModal} />
      )}
    </div>
  );
}
