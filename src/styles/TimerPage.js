/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const mainContainer = styled.div`
    background-image: url(${(props) => props.inputBackground});
    height: 100vh;
    background-size:contain;
`;

export const contentApp = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
