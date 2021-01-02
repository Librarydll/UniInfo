using Dapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Dapper.Context;
using UniInfo.Domain.Models;
using UniInfo.Domain.Services;

namespace UniInfo.Dapper.Services
{
    public class UserDataService : GenericDataService<User>, IUserDataService
    {
        public UserDataService(ApplicationDbConnectionFactory factory) : base(factory)
        {
        }

        public async Task<User> Login(User user)
        {
            using (var connection = _factory.CreateConnection())
            {
                string query = "SELECT *FROM Users where login=@login and passwordhash=@password";

                var u = await connection.QueryFirstOrDefaultAsync<User>(query, new { login = user.Login, password = user.PasswordHash });

                return u;
            }
        }
    }
}
