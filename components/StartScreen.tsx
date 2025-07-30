
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="nes-container with-title is-centered is-dark">
      <p className="title text-lg md:text-xl">학습유형 진단검사</p>
      <div className="flex flex-col items-center text-center space-y-6 p-4">
        <i className="nes-icon is-large star"></i>
        <p className="text-sm md:text-base">
          당신의 숨겨진 학습 스타일을 찾아보세요!
        </p>
        <p className="text-xs md:text-sm">
          몇 가지 간단한 질문에 답하고 MBTI 기반의 맞춤 학습 전략을 확인하세요.
        </p>
        <button type="button" className="nes-btn is-primary" onClick={onStart}>
          시작하기
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
