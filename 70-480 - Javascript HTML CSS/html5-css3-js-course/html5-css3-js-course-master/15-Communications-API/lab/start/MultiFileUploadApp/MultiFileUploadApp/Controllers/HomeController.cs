using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using System.Net;   // For HttpStatusCode enum.
using System.IO;    // For Path class.

namespace MultiFileUploadApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult UploadFile(string filename, HttpPostedFileBase file)
        {
            // Assume it will fail until proven otherwise.
            HttpStatusCode statusCode = HttpStatusCode.InternalServerError;

            if (file.ContentLength != 0)
            {
                try
                {
                    var path = Path.Combine(Server.MapPath("~/App_Data"), filename);
                    file.SaveAs(path);
                    statusCode = HttpStatusCode.OK;
                }
                catch (Exception)
                { }
            }
            return new HttpStatusCodeResult((int)statusCode);
        }
    }
}