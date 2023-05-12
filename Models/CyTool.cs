using static System.Net.Mime.MediaTypeNames;

namespace CyTool.Models
{
    static public class CyTool
    {
        static public string QueryWithPage(string sql, CyGridConfig config)
        {
            if (!config.PageEnable || config.PageSize == 0) return sql;

            sql = "WITH TempCyGridQuery AS(" + sql + ")SELECT COUNT(1) OVER() AS DataCount, TempCyGridQuery.* FROM TempCyGridQuery ORDER BY ";
            if (string.IsNullOrEmpty(config.SortType))
                sql += "CyGridDataCount";
            else
                sql += config.SortType + (config.SortDesc ? " DESC" : "");

            sql += " OFFSET " + config.PageSize * config.PageNow + " ROWS FETCH NEXT " + config.PageSize + " ROWS ONLY";

            return sql;
        }
    }
}
