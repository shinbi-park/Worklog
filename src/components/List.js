import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CeoItem from "../ceo/CeoItem";
import DevelopItem from "../develop/DevelopItem";
import SecurityItem from "../security/SecurityItem";
import { Button } from "primereact/button";

const List = ({ CEOList, DevelopList, SecurityList, data, viewCount }) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const navigate = useNavigate();

  const goWrite = () => {
    navigate("/new");
  };

  const Logout = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="List">
        <Button
          style={{
            fontSize: "13px",
            width: "120px",
            height: "40px",
            marginTop: "20px",
            marginLeft: "900px",
          }}
          label="로그아웃"
          className="p-button-text p-button-plain"
          icon="pi pi-user-minus"
          onClick={Logout}
        />

        <div className="List_title">
          <p>부서</p>
          <p>이름</p>
          <p>상세보기</p>
          <p>작성일자</p>
          <p>비고</p>
          <p>작성</p>
        </div>

        <div className="List_total">
          <div className="Ceo_cell">
            <span className="Ceo_dep">대표이사</span>
            {CEOList.map((it) => (
              <CeoItem data={data} key={it.id} {...it} />
            ))}
          </div>
          <div className="Develop_cell">
            <p className="Develop_dep">개발팀</p>
            {DevelopList.map((it) => (
              <DevelopItem key={it.id} {...it} />
            ))}
          </div>
          <div className="Security_cell">
            <p className="Security_dep">보안팀</p>
            {SecurityList.map((it) => (
              <SecurityItem key={it.id} {...it} viewCount={viewCount} />
            ))}
          </div>
        </div>
      </div>
      <div className="goWrite_wrap">
        {data.isUpload ? (
          <></>
        ) : (
          <Button
            style={{ fontSize: "14px" }}
            label="업무일지 작성"
            icon="pi pi-plus"
            className="p-button-raised p-button-help p-button-text"
            onClick={goWrite}
          />
        )}
      </div>
    </div>
  );
};

export default List;
