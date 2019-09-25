using System;
using System.Collections.Generic;
using System.IO;
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

        public ActionResult GetUsingAjaxDirectly()
        {
            return View();
        }

        public ActionResult GetUsingAjaxWithJQuery()
        {
            return View();
        }

        public ActionResult GetUsingAjaxWithJQueryDeferred()
        {
            return View();
        }

        public ActionResult GetUsingFetch()
        {
            return View();
        }

        public ActionResult GetUsingFetchWithAsyncAwait()
        {
            return View();
        }

        public ActionResult PostUsingAjaxDirectly()
        {
            return View();
        }

        public ActionResult PostUsingAjaxWithJQueryDeferred()
        {
            return View();
        }

        public ActionResult PostUsingFetch()
        {
            return View();
        }

        public ActionResult PostUsingFetchWithAsyncAwait()
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

        [HttpPost]
        public string Upload()
        {
            // Create upload path
            Directory.CreateDirectory(HttpContext.Server.MapPath("~/UploadedFiles"));

            for (int i = 0; i < HttpContext.Request.Files.Count; i++)
            {
                // Get the file from the index
                HttpPostedFileBase file = HttpContext.Request.Files[i];

                // Get the complete file path
                var fileSavePath = Path.Combine(HttpContext.Server.MapPath("~/UploadedFiles"), file.FileName);

                // Save the uploaded file to "UploadedFiles" folder
                file.SaveAs(fileSavePath);
            }

            return $"Received {HttpContext.Request.Files.Count.ToString()} {(HttpContext.Request.Files.Count == 1 ? "file" : "files")}."; 
        }
    }
}
