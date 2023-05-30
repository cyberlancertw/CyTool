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

        public IActionResult DemoModal1()
        {
            return View();
        }
        public IActionResult DemoModal2()
        {
            return View();
        }
        public IActionResult DemoModal3()
        {
            return View();
        }
        public IActionResult DemoModal4()
        {
            return View();
        }
        public IActionResult DemoModal5()
        {
            return View();
        }
        public IActionResult DemoModal6()
        {
            return View();
        }
        public IActionResult DemoModal7()
        {
            return View();
        }
        public IActionResult DemoIcon()
        {
            return View();
        }
        public IActionResult DemoTransfer1()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public JsonResult QueryStudents([FromBody]QueryStudents query)
        {
            SqlInfo info = new SqlInfo();
            List<Student> qryResult = service.QueryStudents(query, info);
            return Json(new { success = info.Success, data = qryResult });
        }
    }
}