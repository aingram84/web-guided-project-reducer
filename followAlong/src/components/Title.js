import React, { useState, useReducer } from 'react';
import { initialState } from '../reducers/title.reducer';
import { setNewTitleText, setTitle, toggleEditing } from '../actions/title.actions';

const Title = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {!editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={() => dispatch(toggleEditing())} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={(e) => dispatch(setNewTitleText(e.target.value))}
          />
          <button
            onClick={() => dispatch(setTitle(state.newTitleText))}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;