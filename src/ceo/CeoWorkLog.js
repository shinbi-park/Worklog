import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkLog from "../components/WorkLog";
import { Button } from "primereact/button";

const CeoWorkLog = ({ data, onEdit, onRemove }) => {
  const logref = useRef();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [isWritten, setIsWritten] = useState(false);
  const [curMain, setCurMain] = useState(data.maintask);
  const [curDetail, setCurDetail] = useState(data.detailtask);
  const [curLeft, setCurLeft] = useState(data.lefttask);
  const [curPlan, setCurPlan] = useState(data.taskplan);
  const navigate = useNavigate();

  const isWrittenToggle = () => {
    setIsWritten(!isWritten);
  };

  const QuitEdit = () => {
    setIsWritten(false);
    setCurMain(data.maintask);
  };

  const SaveEdit = () => {
    if (curMain < 1 && curDetail < 1 && curLeft < 1 && curPlan < 1) {
      logref.current.focus();
      return;
    }
    onEdit(curMain, curDetail, curLeft, curPlan);

    isWrittenToggle();
  };

  const Removelog = () => {
    if (window.confirm("업무 일지를 삭제하시겠습니까?")) {
      onRemove(data.id);
      setIsWritten(false);
      navigate("/list");
    }
  };

  return (
    <div className="WorkLog">
      <div className="Ceo_header">
        <h2>
          {date} {data.name} 일일 업무
        </h2>
        <Button
          style={{
            fontSize: "13px",
            width: "120px",
            height: "40px",
            marginTop: "20px",
          }}
          label="삭제하기"
          className="p-button-text p-button-plain"
          icon="pi pi-trash"
          onClick={Removelog}
        />
        {/* <button className="removebtn" onClick={Removelog}>
          삭제하기
        </button> */}
      </div>
      <table className="Worklog_table">
        <tbody>
          <tr className="Worklog_title">
            <th>부서</th>
            <td>{data.division}</td>
            <th>이름</th>
            <td>{data.name}</td>
          </tr>
          <tr className="Maintask">
            <th>주요업무</th>
            <td colSpan={3}>
              {isWritten ? (
                <>
                  <textarea
                    ref={logref}
                    className="New_maintask"
                    value={curMain}
                    onChange={(e) => setCurMain(e.target.value)}
                  />
                </>
              ) : (
                <>{data.maintask}</>
              )}
            </td>
          </tr>
          <tr className="Detailtask">
            <th>세부업무</th>
            <td colSpan={3}>
              {isWritten ? (
                <>
                  <textarea
                    className="New_detailtask"
                    value={curDetail}
                    onChange={(e) => setCurDetail(e.target.value)}
                  />
                </>
              ) : (
                <>{data.detailtask}</>
              )}
            </td>
          </tr>
          <tr className="lefttask">
            <th>미결업무</th>
            <td colSpan={3}>
              {isWritten ? (
                <>
                  <textarea
                    className="New_lefttask"
                    value={curLeft}
                    onChange={(e) => setCurLeft(e.target.value)}
                  />
                </>
              ) : (
                <>{data.lefttask}</>
              )}
            </td>
          </tr>
          <tr className="taskplan">
            <th>익일 업무 계획</th>
            <td colSpan={3}>
              {isWritten ? (
                <>
                  <textarea
                    className="New_taskplan"
                    value={curPlan}
                    onChange={(e) => setCurPlan(e.target.value)}
                  />
                </>
              ) : (
                <>{data.taskplan}</>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="New_button_wrap">
        {isWritten ? (
          <>
            <Button
              style={{ fontSize: "13px" }}
              label="수정 취소"
              icon="pi pi-replay"
              className="p-button-raised p-button-info p-button-text"
              onClick={QuitEdit}
            />
            {/* <button className="New_Edit" onClick={QuitEdit}>
              수정 취소
            </button> */}
            <Button
              style={{ fontSize: "13px", marginLeft: "10px" }}
              label="수정 완료"
              icon="pi pi-save"
              className="p-button-raised p-button-info p-button-text"
              onClick={SaveEdit}
            />
            {/* <button className="New_cancel" onClick={SaveEdit}>
              수정 완료
            </button> */}
          </>
        ) : (
          <>
            <Button
              style={{ fontSize: "13px" }}
              label="업무 일지 수정"
              icon="pi pi-pencil"
              className="p-button-raised p-button-info p-button-text"
              onClick={isWrittenToggle}
            />

            {/* <button className="New_cancel" onClick={isWrittenToggle}>
              업무일지 수정
            </button> */}
            <Button
              style={{ fontSize: "13px", marginLeft: "10px" }}
              label="업무 일지 메인"
              icon="pi pi-bars"
              className="p-button-raised p-button-info p-button-text"
              onClick={() => navigate("/list")}
            />
            {/* <button className="New_Edit" onClick={() => navigate("/list")}>
              업무일지 메인
            </button> */}
          </>
        )}
      </div>
    </div>
  );
};

export default CeoWorkLog;
