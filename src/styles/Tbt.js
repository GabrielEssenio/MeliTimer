/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import arraiaAudience from '../images/Background/ArraiaAudience.png';

export const tbtPage = styled.div`
    height: 100vh;
    background-image: ${`url(${arraiaAudience})`};
`;

export const contentTbt = styled.div`
 display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const tbtButton = styled.div`
    margin-top: 120px;
`;

export const textButtonTbt = styled.p`
    font-size: xx-large;
`;
