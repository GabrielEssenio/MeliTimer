/* eslint-disable no-magic-numbers */
import styled from 'styled-components';

export const speaksMain = styled.div`
display: flex;
flex-direction: column;
width: 400px;
`;

export const speaksName = styled.p`
justify-content: center;
align-items: center;
font-size: 2.5em;
font-weight: bold;
color: rgb(221, 233, 2);
`;

export const speaksImage = styled.img`
    width: 350px;
    height: 350px;
`;

export const buttonNextPerson = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    color: rgb(25, 53, 232);
    bottom: 0px;
    border: none;
    margin: 5px;
    margin-bottom: 10px;
    padding: 5px 15px;
    border-radius: 5px;
    background-color: rgb(221, 233, 2);
    text-transform: uppercase;
    font-weight: 750;
    font-weight: bold;
`;

export const speaksRow = styled.div`
display: flex;
flex-direction: row;
`;
