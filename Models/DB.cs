using System.Data;
using System.Data.SqlClient;

namespace CyTool.Models
{
    public class DB
    {
        private readonly IConfiguration _config;
        private readonly string _connStr;

        public DB(IConfiguration config)
        {
            _config = config;
            _connStr = _config.GetConnectionString("Default");
        }

        public IDbConnection Connection()
        {
            return new SqlConnection(_connStr);
        }
    }
}
