'use client'
import styled from "styled-components";
import Image from 'next/image';

export const Main  = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const SubMain = styled.div`
color: black;
font-size: 20px;
text-align: center;
margin: 2rem;
    padding: 2rem;
    background: #b1b5ff;
    border-radius: 30px;
`;

export const Background = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const BoImage1 = styled(Image)`
border-radius: 50%;
position: absolute;
    left: 10%;
    top: 6%;
`;
export const BoImage2 = styled(Image)`
border-radius: 50%;
position: absolute;
left: 73%;
    top: 2%;
`;
export const BoImage3 = styled(Image)`
border-radius: 50%;
position: absolute;
left: 81%;
    bottom: 8%;
`;
export const BoImage4 = styled(Image)`
border-radius: 50%;
position: absolute;
left: 5%;
    bottom: 3%;
`;
export const BoImage5 = styled(Image)`
border-radius: 50%;
position: absolute;
left: 69%;
    bottom: 36%;
`;