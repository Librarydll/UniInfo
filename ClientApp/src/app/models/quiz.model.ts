 export class Quiz {
  id: number;
  question: string;
  rightAnswer: string;
  firstAnswer: string;
  secondAnswer: string;
  thirdAnswer: string;
  fourthAnswer: string;
  language: number;
  subject: number;
  questionUniqueId: number;
  selectedAnswer: string;
}

export class QuizAnswer {
  firstSubjectRightAnswersCount: number;
  secondSubjectRightAnswersCount: number;

  get totalRigthAnswer():number {
    return this.firstSubjectRightAnswersCount + this.secondSubjectRightAnswersCount;
  }

  get totalPoints(): number {
    return Math.round((this.totalRigthAnswer * 3.1 + Number.EPSILON) * 100) / 100
  }
}
