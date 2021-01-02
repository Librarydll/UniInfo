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
  bothLanguages: boolean;
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

  get firstPoint():number {
    return Math.round((this.firstSubjectRightAnswersCount * 3.1 + Number.EPSILON) * 100) / 100
  }
  get secondPoint(): number {
    return Math.round((this.secondSubjectRightAnswersCount * 3.1 + Number.EPSILON) * 100) / 100
  }
}
