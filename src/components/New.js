import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const New = ({ onCreate }) => {
  const logref = useRef();
  const [state, setState] = useState({
    detailtask: "",
    maintask: "",
    taskplan: "",
    lefttask: "",
  });

  const navigate = useNavigate();

  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const NewSubmit = () => {
    if (
      state.maintask < 1 &&
      state.detailtask < 1 &&
      state.taskplan < 1 &&
      state.lefttask < 1
    ) {
      logref.current.focus();
      return;
    }
    if (window.confirm("업무일지를 등록하시겠습니까?")) {
      onCreate(
        state.maintask,
        state.detailtask,
        state.lefttask,
        state.taskplan
      );
      navigate("/list", { replace: true });
    }
  };

  const OnChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="New">
      <h2>{date} 업무일지 작성</h2>

      <table className="New_table">
        <thead>
          <tr className="New_title">
            <th>부서</th>
            <td>대표이사</td>
            <th>이름</th>
            <td>김민성</td>
          </tr>
          <tr>
            <th>주요업무</th>
            <td colSpan={3}>
              <textarea
                ref={logref}
                className="New_maintask"
                name="maintask"
                value={state.maintask}
                onChange={OnChangeState}
              />
            </td>
          </tr>
          <tr>
            <th>세부업무</th>
            <td colSpan={3}>
              <textarea
                className="New_detailtask"
                name="detailtask"
                value={state.detailtask}
                onChange={OnChangeState}
              />
            </td>
          </tr>
          <tr>
            <th>미결업무</th>
            <td colSpan={3}>
              <textarea
                className="New_lefttask"
                name="lefttask"
                value={state.lefttask}
                onChange={OnChangeState}
              />
            </td>
          </tr>
          <tr>
            <th>익일 업무 계획</th>
            <td colSpan={3}>
              <textarea
                className="New_taskplan"
                name="taskplan"
                value={state.taskplan}
                onChange={OnChangeState}
              />
            </td>
          </tr>
        </thead>
      </table>
      <div className="New_button_wrap">
        <Button
          style={{ fontSize: "12px" }}
          label="업무일지 등록"
          icon="pi pi-check"
          className="p-button-raised p-button-info p-button-text"
          onClick={NewSubmit}
        />
        <Button
          style={{ marginLeft: "10px", fontSize: "12px" }}
          label="작성 취소하기"
          icon="pi pi-times"
          className="p-button-raised p-button-info p-button-text"
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default New;
