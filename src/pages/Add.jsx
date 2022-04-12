import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { handleEdit, handleCreate } from '../reducers';

const BackButton = styled.button`
  width: 100px;
  height: 30px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
`;

const AddTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: bold;
`;

const AddInput = styled.input`
  width: 500px;
  margin-bottom: 20px;
  padding: 10px;
`;

const AddTextArea = styled.textarea`
  width: 500px;
  height: 150px;
  margin-bottom: 20px;
  padding: 10px;
`;

const AddButton = styled.button`
  width: 500px;
  padding: 10px;
  cursor: pointer;
`;

function Add({ isEdit, realData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const titleInput = useRef(null);
  const contentInput = useRef(null);

  const [state, setState] = useState({
    title: '',
    content: '',
  });

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.title.length < 1) {
      titleInput.current.focus();
      return;
    } else if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    if (!isEdit) {
      dispatch(handleCreate(state.title, state.content));
    } else {
      dispatch(handleEdit(parseInt(realData.id), state.title, state.content));
    }

    navigate('/', { replace: true });
    alert('저장 완료');
  };

  useEffect(() => {
    if (isEdit) {
      setState(realData);
    }
  }, [isEdit, realData]);

  return (
    <>
      <BackButton onClick={handleBackClick}>뒤로가기</BackButton>
      <Container>
        <AddTitle>{isEdit ? '글 수정' : '글 작성'}</AddTitle>
        <AddInput
          ref={titleInput}
          name="title"
          value={state.title}
          onChange={handleChangeState}
        />
        <AddTextArea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
        <AddButton onClick={handleSubmit}>
          {isEdit ? '수정하기' : '추가하기'}
        </AddButton>
      </Container>
    </>
  );
}

export default Add;
