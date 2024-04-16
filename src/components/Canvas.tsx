'use client';

import { presentList } from "@/contents/presentList";
import { Pin, RulletBtn } from "@/style/buttonStyle";
import { Main } from "@/style/homeStyle";
import React, { useEffect, useRef, useState } from "react";

export default function Canvas() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    drawRouletteWheel();
  }, []); 
  
  const drawRouletteWheel = () => {
    if(canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if(context) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 200; 
        const numSegments = presentList.length;
        const segmentAngle = 2 * Math.PI / numSegments; // 각 조각의 각도

        presentList.forEach((present, index) => {
          const startAngle = segmentAngle * index;
          const endAngle = segmentAngle * (index + 1);

          
          context.beginPath();
          // context.moveTo(centerX, centerY);
          context.arc(centerX, centerY, radius, segmentAngle * index, segmentAngle * (index + 1), false);
          context.lineTo(centerX, centerY);
          context.closePath();
          context.fillStyle = present.color;
          context.fill();
           // 텍스트를 추가합니다.
        const textAngle = startAngle + (endAngle - startAngle) / 2; // 조각의 중앙 각도
        const textRadius = radius * 0.75; // 텍스트를 그릴 반지름 위치
        const textX = centerX + textRadius * Math.cos(textAngle);
        const textY = centerY + textRadius * Math.sin(textAngle);

        context.fillStyle = 'black'; // 텍스트 색상
        context.font = '15px Arial'; // 텍스트 스타일
        context.textAlign = 'center'; // 텍스트 가로 정렬
        context.textBaseline = 'middle'; // 텍스트 세로 정렬
        context.fillText(present.presentName, textX, textY); // 텍스트 그리기
        }
        
        );
        
        context.beginPath();
        context.arc(centerX, centerY, 70, 0, 2 * Math.PI, false);
        context.fillStyle = 'white';
        context.fill();
        context.lineWidth = 5;

      }
    }
  };

  const rotate = () => {
    if (isSpinning) return; // 이미 돌고 있는 중이면 클릭 무시
  
    setIsSpinning(true); // 돌리는 중으로 상태 변경
  
    let ran = Math.floor(Math.random() * presentList.length);
    let arc = 360 / presentList.length;
    let rotate = (ran * arc) + 3600 + (arc * 3);
  
    if (canvasRef.current) {
      const initialTransform = canvasRef.current.style.transform;
      canvasRef.current.style.transition = 'transform 3s ease-out';
      canvasRef.current.style.transform = `${initialTransform} rotate(-${rotate}deg)`;
  
      // 3초 후에 돌아가는 중이 아닌 상태로 변경
      setTimeout(() => {
        setIsSpinning(false);
        if (canvasRef.current) {
          canvasRef.current.style.transition = 'none';
        }
      }, 3000);
      localStorage.setItem('ran', ran.toString());
    }
  
    return ran;
  };
  
  



  return (
    <Main>
      <Pin className="pin"></Pin>
      <canvas id="canvas" width="500" height="500" ref={canvasRef} className="canvas"></canvas>
      <RulletBtn className="buttonOfRullet" onClick={rotate} disabled={isSpinning}>룰렛 돌리기</RulletBtn>
    </Main>
  );
}
