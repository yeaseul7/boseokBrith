
'use client';
import styled, { keyframes } from "styled-components";


export const RulletBtn  = styled.button`
  width: 100px;
  height: 50px;
  background-color: #b1b5ff;
  color: #000000;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #777ab0;
  }

`;
export const Pin = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: 25%;
    left: 49%;
    transform: translateX(30%);
  border-radius: 32px 32px 0 0;
  border-top: 70px solid #ff8383; /* 상단 색상 */
  border-left: 16px solid transparent; 
  border-right: 16px solid transparent; 
  z-index: 1;
`;