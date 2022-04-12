let nextId = 6; // 1 ~ 5까지 더미 데이터 있어서

// action 정의
const INIT = 'INIT';
const CREATE = 'CREATE';
const REMOVE = 'REMOVE';
const EDIT = 'EDIT';

// action 생성 함수
export const handleCreate = (title, content) => {
  return {
    type: CREATE,
    data: {
      id: nextId++, // 새 항목을 추가하고 nextId 값에 1 더해줌
      title: title,
      content: content,
    },
  };
};

export const handleEdit = (id, title, content) => {
  return {
    type: EDIT,
    data: {
      id: id,
      title: title,
      content: content,
    },
  };
};

export const handleRemove = (currentId) => {
  return {
    type: REMOVE,
    data: {
      id: currentId,
    },
  };
};

// 초기값
const initialState = {
  dataList: [
    {
      id: 1,
      title: '리엑트',
      content: '리엑트의 최강자는 누굴까',
    },
    {
      id: 2,
      title: '타입스크립트',
      content: '타입스크립트 넘나 어려운것..',
    },
    {
      id: 3,
      title: '자바스크립트',
      content: '자바스크립트도 어려웠는데...?',
    },
    {
      id: 4,
      title: '넥스트',
      content: '넥스트는 왜 만들어졌을까',
    },
    {
      id: 5,
      title: '프론트엔드',
      content: '프론트엔드란 무엇인가..',
    },
  ],
};

// 이전 상태와 액션으르 통해 다음 상태를 만들어 냄
const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case INIT: {
      return action.data;
    }

    case CREATE:
      return {
        ...state,
        dataList: [action.data, ...state.dataList],
      };

    case EDIT:
      return {
        ...state,
        dataList: state.dataList.map((list) =>
          list.id === action.data.id ? { ...action.data } : list
        ),
      };

    case REMOVE:
      return {
        ...state,
        dataList: state.dataList.filter((list) => list.id !== action.data.id),
      };

    default:
      return state;
  }
};

export default rootReducers;
