using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UniInfo.Domain.Models;

namespace UniInfo.Web.Services.Shuffle
{
    public interface IShuffleQuizService
    {
        IEnumerable<Quiz> ShuffleAnswersInQuizes(IEnumerable<Quiz> quizzes);
    }
}
