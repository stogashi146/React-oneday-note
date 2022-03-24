import "./styles.css";
import React from "react";
import { ReactDOM, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const nowDate = () => {
    return (
      new Date().getFullYear() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getDate()
    );
  };

  const [text, setText] = useState([[]]);
  const [noteText, setNoteText] = useState([[nowDate(), "うんこ"]]);
  const [edit, setEdit] = useState([false]);

  const onChangeText = (event) => setText(event.target.value);

  const onClickAdd = () => {
    const newTextList = [...noteText, [nowDate(), text]];
    setNoteText(newTextList);
    setText("");
  };

  const onClickEdit = (index) => {};

  const onClickDelete = (index) => {
    const newTextList = [...noteText];
    newTextList.splice(index, 1);
    setNoteText(newTextList);
  };

  return (
    <>
      <h3>ひとこと書いてみよう</h3>
      <div className="input-area">
        <input type="text" value={text} onChange={onChangeText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th className="date-area">日付</th>
              <th>ひとこと</th>
            </tr>
          </thead>
          <tbody>
            {noteText.map((text, index) => {
              return (
                <tr key={index}>
                  <td>{text[0]}</td>
                  {edit ? (
                    <td>
                      <input type="text" value={text[1]} />
                      <button onClick={() => setEdit(!edit)}>保存</button>
                    </td>
                  ) : (
                    <td>
                      {text[1]}
                      <span
                        className="edit-icon"
                        onClick={() => onClickEdit(index)}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                      <span
                        className="edit-icon"
                        onClick={() => onClickDelete(index)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
