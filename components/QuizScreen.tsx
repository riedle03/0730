
import React from 'react';
import type { Question, MBTITrait } from '../types';

interface QuizScreenProps {
  question: Question;
  onAnswer: (trait: MBTITrait) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ question, onAnswer, questionNumber, totalQuestions }) => {
  const progressValue = (questionNumber / totalQuestions) * 100;

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <p className="text-sm mb-2">Question {questionNumber}/{totalQuestions}</p>
        <progress className="nes-progress is-primary" value={progressValue} max="100"></progress>
      </div>
      <div className="nes-container is-dark flex-grow">
        <p className="text-sm md:text-base leading-relaxed">{question.question}</p>
      </div>
      <div className="mt-4 flex flex-col">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            type="button"
            className="nes-btn"
            onClick={() => onAnswer(answer.trait)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizScreen;
