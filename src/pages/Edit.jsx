import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Add from './Add';

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dataList = useSelector((state) => state.dataList); // 원본 데이터 가져옴
  const [realData, setRealData] = useState(); // currentData 저장할 state

  // Mount 되었을 때
  useEffect(() => {
    if (dataList.length >= 1) {
      // 원본 데이터에서 id값과 일치하는 거 가져온다.
      const currentData = dataList.find((it) => {
        return Number(it.id) === Number(id);
      });

      if (currentData) {
        setRealData(currentData);
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [id, dataList]); // id와 dataList가 변할 때만 꺼냄

  // edit 페이지이구, realData있을 경우 여기서 Add 페이지 노출
  return <>{realData && <Add isEdit={true} realData={realData} />}</>;
}

export default Edit;
