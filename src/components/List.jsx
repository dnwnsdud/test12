export default function List({ list, i, openModal, deleteItem }) {
  // console.log(props);
  return (
    <li className="list">
      <p
        onClick={() => {
          openModal(i);
        }}
      >
        {list}
      </p>
      <i
        className="fa-regular fa-trash-can"
        onClick={() => {
          deleteItem(i);
        }}
      ></i>
    </li>
  );
}
