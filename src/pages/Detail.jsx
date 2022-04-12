import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
`;

const DetailTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const DetailContent = styled.div`
  width: 500px;
  height: 150px;
  margin-bottom: 20px;
  padding: 20px;
  overflow-wrap: keep-all;
  background-color: #ececec;
`;

const DetailEditButton = styled.button`
  width: 100px;
  height: 30px;
`;

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dataList = useSelector((state) => state.dataList);

  const [data, setData] = useState();

  const handleEditClick = () => {
    navigate(`/edit/${data.id}`);
  };

  useEffect(() => {
    if (dataList.length >= 1) {
      const currentData = dataList.find((it) => Number(it.id) === Number(id));

      if (currentData) {
        setData(currentData);
      } else {
        alert('없는 리스트 입니다.');
        navigate('/', { replace: true });
      }
    }
  }, [id, dataList]);

  if (!data) {
    // 데이터가 존재하는지 확인
    return <div>로딩 중 입니다.</div>;
  } else {
    return (
      <>
        <DetailContainer>
          <DetailTitle>{data.title}</DetailTitle>
          <DetailContent>{data.content}</DetailContent>
          <DetailEditButton onClick={handleEditClick}>
            수정하기
          </DetailEditButton>
        </DetailContainer>
      </>
    );
  }
}

export default Detail;
