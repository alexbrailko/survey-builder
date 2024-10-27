export enum QuestionType {
  MultipleChoice = 'multiple-choice',
  Open = 'open',
}

export interface Question {
  type: QuestionType
  text: string
}
