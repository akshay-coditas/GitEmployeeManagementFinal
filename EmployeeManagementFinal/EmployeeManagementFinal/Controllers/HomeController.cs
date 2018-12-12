using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EmployeeManagementFinal.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";           

            return View();
        }

        public ActionResult Boom()
        {
            ViewBag.dis = "Hii abhishek how are you";
            return View();
        }

        public ActionResult Boom1()
        {
            
            return View();
        }
    }
}