using CyTool.Models;
using CyTool.Models.Ajax;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CyTool.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly sHome service;

        public HomeController(ILogger<HomeController> logger, sHome service)
        {
            _logger = logger;
            this.service = service;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult DemoLoading()
        {
            return View();
        }

        public IActionResult DemoGrid()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public JsonResult QueryProducts([FromBody]QueryProducts query)
        {
            SqlInfo info = new SqlInfo();
            List<Product> qryResult = service.QueryProducts(query, info);
            return Json(new { success = info.Success, data = qryResult, dataCount = 3 });
        }
    }
}