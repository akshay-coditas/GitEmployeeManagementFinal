using System;
using System.Linq;
using System.Web.Mvc;
using EmployeeManagementFinal.Models;
using EmployeeManagementFinal.Common;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using System.Collections.Generic;
using System.Web.Script.Serialization;

namespace EmployeeManagementFinal.Controllers
{
    public class DefaultController : Controller
    {
        Codita cd = new Codita();
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Registration()
        { 
            return View();
        }

        [HttpPost]
        public ActionResult Registration(string FirstName, string LastName, DateTime DateOfBirth, string EmailId, string PhoneNumber, string UserAddress, string UserId, string UserPassword,string ConfirmPassword , string Gender)
        {
            bool Validations(Codita modelToValidate)
            {
                if (FirstName != "" && LastName != "" && EmailId != "" && PhoneNumber != "" && UserAddress != "" && UserId != "" && UserPassword != "" && ConfirmPassword != "" && (UserPassword == ConfirmPassword))
                {
                    return true;
                }
                return false;
            }
            string EncryptedUserPassword = CryptoServiceProvider.Encrypt(UserPassword);
            EmployeeDBEntities cs = new EmployeeDBEntities();            
            Codita coditas = new Codita()
            {
                FirstName = FirstName,
                LastName = LastName,
                DateOfBirth = DateOfBirth,
                EmailId = EmailId,
                PhoneNumber = PhoneNumber,
                UserAddress = UserAddress,
                UserId = UserId,
                UserPassword = EncryptedUserPassword,
                Gender = Gender
            };
            var isSuccessful = Validations(coditas);
            if (isSuccessful)
            {            
                cs.Coditas.Add(coditas);
                ViewBag.count= cs.SaveChanges();
               
            }            
            return View();
        }

        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(Codita codita, string UserId, string UserPassword)
        {
            EmployeeDBEntities cs = new EmployeeDBEntities();            
            string userPassWordFromDb = (from emp in cs.Coditas where emp.UserId == UserId select emp.UserPassword).FirstOrDefault();
            string userIdFromDb = (from emp in cs.Coditas where emp.UserId == UserId select emp.UserId).FirstOrDefault();

            string decryptedUserPassWordFromDb = CryptoServiceProvider.Decrypt(userPassWordFromDb);
            if ((UserPassword).Equals(decryptedUserPassWordFromDb) && (UserId).Equals(userIdFromDb))
            {
                return View("DashBord");
            }
            return View();
        }
        [HttpGet]
        public ActionResult DemoFinal()
        {
            EmployeeDBEntities db = new EmployeeDBEntities();
            var database = db.Coditas; 
            return View(database);
        }
        [HttpPost]
        public ActionResult DemoFinal(string employeeName)
        {            
            string trimmedEmployeename = employeeName.Trim();
            int indexofspace = trimmedEmployeename.IndexOf(" ", 0);
            string lastName = trimmedEmployeename.Substring(indexofspace+1);
            string firstName = trimmedEmployeename.Substring(0, indexofspace);
            EmployeeDBEntities db = new EmployeeDBEntities();
            var database = from i in db.Coditas where i.FirstName == firstName && i.LastName==lastName select i;
            return View(database);
        }
    }
}