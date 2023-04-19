/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import * as S from '../styles/Action';
import { saveLocalStorage, getLocalStorage } from '../utils/localStorage';

function Action() {
  const [actions, setActions] = useState(getLocalStorage('actions') || []);
  const [newAction, setNewAction] = useState('');

  useEffect(() => {
    saveLocalStorage('actions', actions);
  }, [actions]);

  function handleAdd(e) {
    e.preventDefault();
    if (!newAction) return;
    setActions([...actions, { text: newAction, completed: false }]);
    setNewAction('');
  }

  function handleDelete(index) {
    setActions(actions.filter((_, i) => i !== index));
  }

  function handleToggleComplete(index) {
    setActions(actions.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  }

  return (
    <S.actions>
      <S.header>Actions</S.header>
      <S.actionForm onSubmit={ handleAdd }>
        <S.inputText type="text" value={ newAction } onChange={ (e) => setNewAction(e.target.value) } placeholder="Type your new action" />
        <S.buttonAdd type="submit">Create</S.buttonAdd>
      </S.actionForm>
      <S.actionUl>
        {actions.map((todo, index) => (
          <S.actionLi key={ index }>
            <S.inputCheckbox type="checkbox" checked={ todo.completed } onChange={ () => handleToggleComplete(index) } />
            <S.actionTodo>{todo.text}</S.actionTodo>
            <S.buttonDelete onClick={ () => handleDelete(index) }>Delete</S.buttonDelete>
          </S.actionLi>
        ))}
      </S.actionUl>
    </S.actions>
  );
}

export default Action;
