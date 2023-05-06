using CyTool.Models;
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


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}