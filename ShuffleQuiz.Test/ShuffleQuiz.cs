using Moq;
using System;
using UniInfo.Domain.Services;
using UniInfo.Web.Services.Shuffle;
using Xunit;
using System.Linq;
using System.Collections.Generic;
using UniInfo.Domain.Models;

namespace ShuffleQuiz.Test
{
    public class ShuffleQuiz
    {
        IShuffleQuizService _shuffleQuizService = null;
        public ShuffleQuiz()
        {
            _shuffleQuizService = new ShuffleQuizService();
        }
        [Fact]
        public void GenerateRadnomTest()
        {
            int expectedLength = 4;
            var expectedSum = Enumerable.Range(1, 4).Sum();

            var numbers = ((ShuffleQuizService)_shuffleQuizService).GenerateRandomNumbers();

            Assert.Equal(expectedLength, numbers.Length);
            Assert.Equal(expectedSum, numbers.Sum());
        }

        [Fact]
        public void ShuffleAnswersInQuizesTest()
        {
            string question = "are u sure";
            var quiz = new Quiz
            {
                FirstAnswer = "First",
                SecondAnswer = "Second",
                ThirdAnswer = "Third",
                FourthAnswer = "Fourh",
                Id = 5,
                Subject = 1,
                RightAnswer = "Fourh",
                QuestionUniqueId = 213,
                Question = question,
                Language = 405,
                BothLanguages = false
            };
            var quizes = _shuffleQuizService.ShuffleAnswersInQuizes(new List<Quiz> { quiz });

            var single = quizes.FirstOrDefault();

            Assert.NotEqual(quiz, single);
            Assert.Equal(5, single.Id);
            Assert.Equal(1, single.Subject);
            Assert.Equal("Fourh", single.RightAnswer);
            Assert.Equal(question, single.Question);
            Assert.False(single.BothLanguages);
            Assert.Equal(405, single.Language);
            Assert.Equal(213, single.QuestionUniqueId);
        }


    }
}
