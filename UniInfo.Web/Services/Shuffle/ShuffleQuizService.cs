using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UniInfo.Domain.Models;

namespace UniInfo.Web.Services.Shuffle
{
    public class ShuffleQuizService: IShuffleQuizService
    {
        public const int RandomNumberCount = 4;
        public IEnumerable<Quiz> ShuffleAnswersInQuizes(IEnumerable<Quiz> quizzes)
        {
            foreach (var quiz in quizzes)
            {
               var randomNumbers = GenerateRandomNumbers();

               var firstAnswer = GetPropertyByNumber(quiz, randomNumbers[0]);
               var secondAnswer = GetPropertyByNumber(quiz, randomNumbers[1]);
               var thirdAnswer = GetPropertyByNumber(quiz, randomNumbers[2]);
               var fourthAnswer = GetPropertyByNumber(quiz, randomNumbers[3]);
                Swap(ref firstAnswer,ref secondAnswer);
                Swap(ref thirdAnswer, ref fourthAnswer);
                var resultQuiz = new Quiz()
                {
                    Id = quiz.Id,
                    BothLanguages = quiz.BothLanguages,
                    FirstAnswer = firstAnswer,
                    SecondAnswer = secondAnswer,
                    ThirdAnswer = thirdAnswer,
                    FourthAnswer = fourthAnswer,
                    Language = quiz.Language,
                    Question = quiz.Question,
                    QuestionUniqueId = quiz.QuestionUniqueId,
                    RightAnswer = quiz.RightAnswer,
                    Subject = quiz.Subject
                };
                yield return resultQuiz;
            }

        }
        public int[] GenerateRandomNumbers()
        {
            var random = new Random();
            int i = 0;
            int[] result = new int[RandomNumberCount];
            while (i != RandomNumberCount)
            {
                var randomNumber = random.Next(1, 5);

                if (result.Any(x => x == randomNumber))
                {
                    continue;
                }
                result[i] = randomNumber;
                i++;
            }

            return result;
        }

       
        public string GetPropertyByNumber(Quiz quiz,int number)
        {
            if (number == 1)
            {
                return quiz.FirstAnswer;
            }
            else if (number == 2)
            {
                return quiz.SecondAnswer;

            }
            else if (number == 3)
            {
                return quiz.ThirdAnswer;

            }
            else if (number == 4)
            {
                return quiz.FourthAnswer;
            }
            throw new ArgumentException($"Number was more 4 and less than 1 ,number is {number}");
        }

        public void Swap(ref string from ,ref string to)
        {
            var temp = from;
            from = to;
            to = temp;
        }

  
    }

}
