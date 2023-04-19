/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const mainContainer = styled.div`
height: 100vh;
`;

export const imageContainer = styled.div`
    height: 100%;
    background-position:center;
    background-size: contain;
    background-image: url(${(props) => props.inputBackground});
`;

export const subContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
