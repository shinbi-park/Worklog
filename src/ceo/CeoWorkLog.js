import React, { memo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkLog from "../components/WorkLog";
import { Button } from "primereact/button";
import { type } from "@testing-library/user-event/dist/type";

const CeoWorkLog = ({ data, onEdit, onRemove, Type }) => {
  const logref = useRef();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [isWritten, setIsWritten] = useState(false);
  const [curMain, setCurMain] = useState(data.maintask);
  const [curDetail, setCurDetail] = useState(data.detailtask);
  const [curLeft, setCurLeft] = useState(data.lefttask);
  const [curPlan, setCurPlan] = useState(data.taskplan);
  const [curMemo, setCurMemo] = useState(data.memo);
  const [curWorktype, setCurWorktype] = useState(data.worktype);
  const navigate = useNavigate();

  const isWrittenToggle = () => {
    setIsWritten(!isWritten);
  };

  const QuitEdit = () => {
    setIsWritten(false);
    setCurMain(data.maintask);
  };

  const SaveEdit = () => {
    if (
      curMain < 1 &&
      curDetail < 1 &&
      curLeft < 1 &&
      curPlan < 1 &&
      curWorktype === "a"
    ) {
      logref.current.focus();
      return;
    }
    if (curWorktype === "b" || curWorktype === "c") {
      onEdit(curMain, curDetail, curLeft, curPlan, curMemo, curWorktype);
    }

    onEdit(curMain, curDetail, curLeft, curPlan, curMemo, curWorktype);
    isWrittenToggle();
  };

  const Removelog = () => {
    if (window.confirm("업무 일지를 삭제하시겠습니까?")) {
      onRemove(data.id);
      setIsWritten(false);
      navigate("/list");
    }
  };
  const EditMemo = (e) => {
    setCurWorktype(e.target.value);
    setCurMemo(e.target.id);
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
          <tr>
            <th>비고</th>
            <td colSpan={3}>
              {isWritten ? (
                <div className="New_memo">
                  {Type.map((item) => {
                    return (
                      <React.Fragment key={item.id}>
                        <input
                          type="radio"
                          name="memo"
                          id={item.type}
                          value={item.id}
                          checked={item.id === curWorktype}
                          onChange={EditMemo}
                        />

                        <label htmlFor={item.type}>{item.type}</label>
                      </React.Fragment>
                    );
                  })}
                </div>
              ) : (
                <>{data.memo}</>
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

            <Button
              style={{ fontSize: "13px", marginLeft: "10px" }}
              label="수정 완료"
              icon="pi pi-save"
              className="p-button-raised p-button-info p-button-text"
              onClick={SaveEdit}
            />
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

            <Button
              style={{ fontSize: "13px", marginLeft: "10px" }}
              label="업무 일지 메인"
              icon="pi pi-bars"
              className="p-button-raised p-button-info p-button-text"
              onClick={() => navigate("/list")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CeoWorkLog;
