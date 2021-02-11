// Import stylesheets
import "./style.css";

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

import { createStore, combineReducers } from "redux";
import { combineReducers } from "redux";

const initialState = {
  comments: [],
  review: []
};

const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const ADD_COMMENT1 = "ADD_COMMENT1";
const DELETE_COMMENT1 = "DELETE_COMMENT1";
const ADD_REVIEW = "ADD_REVIEW";

const addComment = msg => {
  return {
    type: ADD_COMMENT,
    msg
  };
};

const delComment = index => {
  return {
    type: DELETE_COMMENT,
    index
  };
};

const editComment = (msg, index) => {
  return {
    type: EDIT_COMMENT,
    index,
    msg
  };
};

const addReview = msg => {
  return {
    type: ADD_REVIEW,
    msg
  };
};

const reducerFuntion1 = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT1:
      return {
        ...state,
        comments: [...state.comments, { text: action.num + 1 }]
      };

    case DELETE_COMMENT1:
      return {
        ...state,
        comments: [...state.comments, { text: action.num - 1 }]
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, { text: action.msg }]
      };

    case EDIT_COMMENT:
      const { index, msg } = action;
      return {
        ...state,
        comments: [
          ...state.comments.slice(0, index),
          { text: msg },
          ...state.comments.slice(index + 1)
        ]
      };
    case DELETE_COMMENT:
      const { index: index1 } = action;
      return {
        ...state,
        comments: [
          ...state.comments.slice(0, index1),
          ...state.comments.slice(index1 + 1)
        ]
      };
    default:
      return state;
  }
};

const reducerFuntion2 = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        review: [...state.review, { text: action.msg }]
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  comments: reducerFuntion1,
  review: reducerFuntion2
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addComment("new message"));
store.dispatch(addComment("second message"));
store.dispatch(addComment("third message"));
store.dispatch(addComment("fourth message"));
store.dispatch(editComment("edited message", 1));
store.dispatch(delComment(0));
store.dispatch(addReview("new review"));

// store.dispatch(addComment1(35));
// store.dispatch(delComment1(70));
