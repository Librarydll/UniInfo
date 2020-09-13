using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace UniInfo.Dapper.Context
{
	public class ApplicationDbConnectionFactory
	{
		private readonly string _connectionString = string.Empty;
		public ApplicationDbConnectionFactory(string connstring)
		{
			_connectionString = connstring;
		}

		public IDbConnection CreateConnection()
		{
			return new MySqlConnection(_connectionString);
		}
	}
}
