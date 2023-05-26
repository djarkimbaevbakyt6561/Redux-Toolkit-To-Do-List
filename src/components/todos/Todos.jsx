import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { todosActions } from '../../store/todos';
import { TodoItem } from './TodoItem';

export const Todos = () => {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  function getInputTitle(e) {
    dispatch(todosActions.getInputTitle(e.target.value));
  }
  function getInputDate(e) {
    dispatch(todosActions.getInputDate(e.target.value));
  }
  function addTodoItem(e) {
    e.preventDefault();
    if (todos.inputTitle === '') {
      alert('Напишите что хотите сделать!');
    } else {
      const data = {
        title: todos.inputTitle,
        date: todos.inputDate,
        id: Math.random(1, 10),
      };
      dispatch(todosActions.addTodo(data));
      dispatch(todosActions.resetHandler());
    }
  }
  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(todos.todos));
  }, [todos.todos]);
  return (
    <Container>
      <Title>To Do List</Title>
      <ToDoContainer>
        <Form>
          <input
            type="text"
            onChange={getInputTitle}
            value={todos.inputTitle}
          />
          <input type="date" onChange={getInputDate} value={todos.inputDate} />
          <button onClick={addTodoItem}>Add</button>
        </Form>
        <ul>
          {todos.todos.map((el, index) => {
            return (
              <TodoItem
                index={index}
                id={el.id}
                title={el.title}
                date={el.date}
              />
            );
          })}
        </ul>
      </ToDoContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-column-gap: 5px;
  height: 35px;
  button {
    border: none;
    border-radius: 10px;
    :active {
      background-color: #afffb7;
    }
  }
  input {
    border-radius: 10px;
    border: none;
    text-align: center;
    :focus {
      background-color: #afffb7;
    }
  }
`;
const Title = styled.p`
  font-size: 42px;
  border-bottom: 3px solid white;
  width: 188px;
  font-weight: 500;
  margin-top: 0;
`;

const ToDoContainer = styled.div`
  width: 800px;
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 30px;
  opacity: 0.9;
  background: rgb(185, 214, 173);
  ul {
    padding: 0;
    margin: 0;
    margin-top: 20px;
  }
`;
