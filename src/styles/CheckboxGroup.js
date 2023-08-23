import styled from 'styled-components';
import betaBackground from '../images/Background/Beta.jpg';

export const header = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
`;

export const speakContant = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    background-image: ${`url(${betaBackground})`};
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat; 

`;

export const imageSpeak = styled.img`
    width: 350px;
    height: 350px;
`;

export const inputField = styled.input`
  height: 25px;
  width: 25px;
  background-color: #eee;
`;

export const label = styled.label`
    padding: 20px;
`;
