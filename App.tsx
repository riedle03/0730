
import React, { useState, useCallback } from 'react';
import type { Scores, MBTITrait } from './types';
import { questions } from './constants/questions';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

type GameState = 'start' | 'quiz' | 'result';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [scores, setScores] = useState<Scores>({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
  });
  const [resultType, setResultType] = useState<string | null>(null);

  const handleStartQuiz = useCallback(() => {
    setGameState('quiz');
  }, []);

  const calculateResult = useCallback((finalScores: Scores) => {
    const EorI = finalScores.E > finalScores.I ? 'E' : 'I';
    const SorN = finalScores.S > finalScores.N ? 'S' : 'N';
    const TorF = finalScores.T > finalScores.F ? 'T' : 'F';
    const JorP = finalScores.J > finalScores.P ? 'J' : 'P';
    
    const finalType = `${EorI}${SorN}${TorF}${JorP}`;
    setResultType(finalType);
    setGameState('result');
  }, []);

  const handleAnswer = useCallback((trait: MBTITrait) => {
    const newScores = { ...scores, [trait]: scores[trait] + 1 };
    setScores(newScores);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newScores);
    }
  }, [scores, currentQuestionIndex, calculateResult]);
  
  const handleRestart = useCallback(() => {
    setGameState('start');
    setCurrentQuestionIndex(0);
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setResultType(null);
  }, []);

  const renderScreen = () => {
    switch (gameState) {
      case 'quiz':
        return (
          <QuizScreen
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        );
      case 'result':
        if (resultType) {
            return <ResultScreen resultType={resultType} onRestart={handleRestart} />;
        }
        // Fallback or loading state could go here
        return null; 
      case 'start':
      default:
        return <StartScreen onStart={handleStartQuiz} />;
    }
  };

  return (
    <div className="gameboy-container">
      <div className="gameboy-screen">
        {renderScreen()}
      </div>
      <footer className="text-center text-xs text-gray-700 mt-4">
        <p>&copy; 2025 이대형 저작권</p>
      </footer>
    </div>
  );
};

export default App;