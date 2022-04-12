import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ListItem from '../components/ListItem';

const ListWrap = styled.ul`
  padding: 20px;
`;

const AddButton = styled.button`
  width: 100px;
  height: 30px;
`;

function Main() {
  const navigate = useNavigate();
  const dataList = useSelector((state) => state.dataList);

  const handleAddClick = () => {
    navigate('/add');
  };

  return (
    <>
      <AddButton onClick={handleAddClick}>추가하기</AddButton>
      <ListWrap>
        {dataList.map((list) => (
          <ListItem key={list.id} list={list} />
        ))}
      </ListWrap>
    </>
  );
}

export default Main;
