
export type MBTITrait = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface Answer {
  text: string;
  trait: MBTITrait;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface Scores {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export interface ResultData {
  title: string;
  description: string;
}
