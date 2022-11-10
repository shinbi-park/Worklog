import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle, FiMinus } from "react-icons/fi";

const CeoItem = ({ id, name, memo, view, data }) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const navigate = useNavigate();

  return (
    <div>
      <div className="Ceo_block" key={id}>
        <p className="Ceo_name">{name}</p>
        {data.isUpload ? (
          <button className="Ceo_link" onClick={() => navigate(`/ceo`)}>
            상세보기
          </button>
        ) : (
          <p className="Ceo_link_noraml">상세보기</p>
        )}

        <p className="Ceo_time">{data.isUpload ? date : <></>}</p>
        <p className="Ceo_memo">{memo}</p>
        <p className="Ceo_view">
          {data.isUpload ? <FiCheckCircle /> : <FiMinus />}
        </p>
      </div>
    </div>
  );
};

export default CeoItem;
