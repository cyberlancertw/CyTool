namespace CyTool.Models
{
    public class CyGridConfig
    {
        public bool PageEnable { get; set; }
        public int PageSize { get; set; }
        public int PageNow { get; set; }

        public string SortType { get; set; }
        public bool SortDesc { get; set; }
    }
}
