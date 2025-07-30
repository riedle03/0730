
import type { Question } from '../types';

export const questions: Question[] = [
  {
    question: "그룹 스터디가 끝난 후, 나는...",
    answers: [
      { text: "친구들과 더 얘기하며 에너지를 얻는다.", trait: 'E' },
      { text: "혼자 조용히 정리하며 에너지를 충전한다.", trait: 'I' },
    ],
  },
  {
    question: "새로운 과제를 배울 때, 나는...",
    answers: [
      { text: "구체적인 예시와 실제 데이터를 선호한다.", trait: 'S' },
      { text: "전체적인 개념과 가능성을 먼저 파악한다.", trait: 'N' },
    ],
  },
  {
    question: "팀 프로젝트에서 의견 충돌이 생겼을 때, 나는...",
    answers: [
      { text: "객관적인 사실과 논리로 문제를 해결한다.", trait: 'T' },
      { text: "팀원의 감정을 고려하고 조화를 중요시한다.", trait: 'F' },
    ],
  },
  {
    question: "시험공부 계획을 세울 때, 나는...",
    answers: [
      { text: "미리 체계적으로 계획을 세우고 지킨다.", trait: 'J' },
      { text: "상황에 따라 유연하게 계획을 조절한다.", trait: 'P' },
    ],
  },
    {
    question: "휴식을 취할 때, 나는...",
    answers: [
      { text: "친구들과 만나거나 새로운 활동을 찾는다.", trait: 'E' },
      { text: "집에서 책을 읽거나 영화를 보며 쉰다.", trait: 'I' },
    ],
  },
  {
    question: "설명서를 볼 때, 나는...",
    answers: [
      { text: "단계별 지침을 꼼꼼히 따라하는 편이다.", trait: 'S' },
      { text: "전체 그림을 보고 내 방식대로 조립한다.", trait: 'N' },
    ],
  },
  {
    question: "친구가 고민을 털어놓을 때, 나는...",
    answers: [
      { text: "문제의 원인을 분석하고 해결책을 제시한다.", trait: 'T' },
      { text: "먼저 위로하고 감정적으로 공감해준다.", trait: 'F' },
    ],
  },
  {
    question: "여행을 갈 때, 나는...",
    answers: [
      { text: "숙소, 교통, 일정을 모두 정해놓고 떠난다.", trait: 'J' },
      { text: "발길 닿는 대로 즉흥적으로 즐긴다.", trait: 'P' },
    ],
  },
];
