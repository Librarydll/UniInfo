using Dapper;
using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UniInfo.Dapper.Context;
using UniInfo.Domain.Models;
using UniInfo.Web.Models.ViewModels;
using BC = BCrypt.Net.BCrypt;

namespace UniInfo.Web.Services.Authenticate
{
    public class AuthenticateService : IAuthenticateService
    {
        protected ApplicationDbConnectionFactory _factory;

        public AuthenticateService(ApplicationDbConnectionFactory factory)
        {
            _factory = factory;

        }
        public async Task<bool> Authenticate(LoginViewModel model)
        {
            using (var connection = _factory.CreateConnection())
            {
                string query = "SELECT *FROM Users where login=@login";

                var u = await connection.QueryFirstOrDefaultAsync<User>(query, new { login = model.Login });

                if(u == null || !BC.Verify(model.Password, u.PasswordHash))
                {
                    return false;
                }

                return true;
            }
        }

        public async Task<bool> Register(LoginViewModel model)
        {
            using (var connection = _factory.CreateConnection())
            {
                var user = new User
                {
                    Login = model.Login,
                    PasswordHash = model.Password
                };

                user.PasswordHash = BC.HashPassword(model.Password);
                var row = await connection.InsertAsync(user);
                return row > 0;
            }
        }
    }
}
