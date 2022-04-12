import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { handleRemove } from '../reducers';

const List = styled.li`
  margin-bottom: 10px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ddd;
  cursor: pointer;
`;

const ListTitle = styled.h2`
  margin-bottom: 12px;
  padding-left: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #999;
  font-size: 18px;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListContent = styled.p`
  padding: 10px;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditButton = styled.button`
  width: 100px;
  height: 30px;
`;

const DeleteButton = styled.button`
  width: 100px;
  height: 30px;
`;

function ListItem({ list }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, title, content } = list;

  const handleDetailClick = () => {
    navigate(`/detail/${id}`);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    navigate(`/edit/${id}`);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (window.confirm('정말로 삭제 하시겠습니까?')) {
      dispatch(handleRemove(parseInt(id)));
    }
    console.log('삭제');
  };

  return (
    <>
      <List onClick={handleDetailClick}>
        <ListTitle>{title}</ListTitle>
        <ContentWrapper>
          <ListContent>{content}</ListContent>
          <ButtonWrapper>
            <EditButton onClick={handleEditClick}>수정</EditButton>
            <DeleteButton onClick={handleDeleteClick}>삭제</DeleteButton>
          </ButtonWrapper>
        </ContentWrapper>
      </List>
    </>
  );
}

export default ListItem;
