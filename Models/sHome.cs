using Dapper;

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

        public List<Student> QueryStudents(Ajax.QueryStudents query, SqlInfo info)
        {
            List<Student> result = null;
            try
            {
                using(var conn = db.Connection())
                {
                    string sql = "SELECT [ID],[Name],[Sex],[Birthday],[Height],[Weight],[Score] FROM dbo.Students";
                    sql = CyTool.QueryWithPage(sql, query.Config);
                    //DynamicParameters para = new DynamicParameters();
                    //para.Add("name", query.QName.Trim());

                    //result = conn.Query<Student>(sql).ToList();
                    result = conn.Query<Student>(sql).ToList();
                    info.Success = true;
                }
            }
            catch(Exception e)
            {
                info.Message = e.Message;
            }
            return result;
        }

        public void GetStudentScore(SqlInfo info)
        {
            List<Item> fromData = null;
            List<Item> toData = null;
            string sql = string.Empty;

            try
            {
                using (var conn = db.Connection())
                {
                    sql = "SELECT [Name] AS [text], [ID] AS [value] FROM dbo.Students WHERE Score >= 60";
                    fromData = conn.Query<Item>(sql).ToList();
                    sql = "SELECT [Name] AS [text], [ID] AS [value] FROM dbo.Students WHERE Score < 60";
                    toData = conn.Query<Item>(sql).ToList();
                    info.ObjectData = fromData;
                    info.ObjectData2 = toData;
                    info.Success = true;
                }
            }
            catch (Exception e)
            {
                info.Message = e.Message;
            }
        }
    }
}
