namespace CyTool.Models
{
    public class SqlInfo
    {
        public bool Success { get; set; } = false;
        public string Message { get; set; } = string.Empty;
        public Object? ObjectData { get; set; }
        public Object? ObjectData2 { get; set; }
        public string? StringData { get; set; }
        public int IntData { get; set; }
    }
}
