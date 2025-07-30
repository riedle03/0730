import React from 'react';
import { results } from '../constants/results';

interface ResultScreenProps {
  resultType: string;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ resultType, onRestart }) => {
  const resultData = results[resultType];

  if (!resultData) {
    return (
      <div className="nes-container is-dark with-title is-centered">
        <p className="title">오류</p>
        <p>결과를 찾을 수 없습니다.</p>
        <button type="button" className="nes-btn is-error mt-4" onClick={onRestart}>
          다시 시도
        </button>
      </div>
    );
  }

  return (
    <div className="nes-container is-dark with-title is-centered">
      <p className="title">{resultType}</p>
      <div className="text-center space-y-4">
        <h2 className="text-lg text-yellow-400">{resultData.title}</h2>
        <div className="nes-container is-dark">
         <p className="text-left text-xs md:text-sm leading-relaxed">{resultData.description}</p>
        </div>
        <button type="button" className="nes-btn is-success" onClick={onRestart}>
          다시하기
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;