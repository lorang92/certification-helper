using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AjaxDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult UseAjaxDirectly()
        {
            return View();
        }

        public ActionResult UseAjaxWithJQuery()
        {
            return View();
        }

        public ActionResult UseAjaxWithJQueryDeferred()
        {
            return View();
        }

        public string Echo(string text)
        {
            return text;
        }

        public string EchoInUppercase(string text)
        {
            return text.ToUpper();
        }

        public string EchoInUppercaseMultipleTimes(string text, int repeatCount)
        {
            String result = "";
            for (int i = 0; i < repeatCount; i++)
            {
                result += text + " ";
            }
            return result.ToUpper();
        }
    }
}
