using Dapper;
using Microsoft.Extensions.Options;

namespace CyTool.Models
{
    public class sHome
    {
        private readonly DB db;
        private readonly IWebHostEnvironment env;

        public sHome(DB db, IWebHostEnvironment environment)
        {
            this.db = db;
            env = environment;
        }

        public List<Product> QueryProducts(Ajax.QueryProducts query, SqlInfo info)
        {
            List<Product> result = null;
            try
            {
                using(var conn = db.Connection())
                {

                    string sql = "SELECT [ID],[Name],[Price],[Memo] FROM dbo.Products";
                    result = conn.Query<Product>(sql).ToList();
                    info.Success = true;
                }
            }
            catch(Exception e)
            {
                info.Message = e.Message;
            }
            return result;
        }
        
    }
}
