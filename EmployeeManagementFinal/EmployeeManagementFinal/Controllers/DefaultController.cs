using System;
using System.Linq;
using System.Web.Mvc;
using EmployeeManagementFinal.Models;
using EmployeeManagementFinal.Common;

namespace EmployeeManagementFinal.Controllers
{
    public class DefaultController : Controller
    {
        /// <summary>
        /// Test stash
        /// </summary>
        /// <returns></returns>
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

        /// <summary>
        /// This method is used for Login Creds verification
        /// </summary>
        /// <param name="codita"></param>
        /// <param name="UserId"></param>
        /// <param name="UserPassword"></param>
        /// <returns></returns>
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
    }
}