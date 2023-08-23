import styled from 'styled-components';

export const header = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
`;

export const actionForm = styled.form`
    display: flex;
    margin-bottom: 20px;
`;

export const inputText = styled.input`
    padding: 10px;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    flex: 1;
`;

export const buttonAdd = styled.button`
    padding: 10px;
    font-size: 1.2rem;
    border: none;
    background-color: #28a745;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`;

export const actionUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const actionLi = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f5f5f5;
    border-radius: 5px;
    justify-content: space-between;
    flex-wrap: wrap
    width 100%;
`;
export const actionTodo = styled.label`
    color: black;
    font-size: 20px;
    font-weight: bold;
`;

export const inputCheckbox = styled.input`
    margin-right: 10px;
    cursor: pointer;
    transform: scale(1.5);
`;

export const buttonDelete = styled.button`
    padding: 10px;
    font-size: 1.2rem;
    border: none;
    background-color: #dc3545;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
`;

export const actions = styled.div`
     text-align: center;
     padding: 10px;
     background: rgb(239, 239, 0);
     color:rgb(25, 53, 232);
     border-radius: 30px;
     margin-top: 50px;
     width: 700px;
`;
