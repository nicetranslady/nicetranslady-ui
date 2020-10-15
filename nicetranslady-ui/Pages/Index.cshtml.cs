using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace nicetranslady.ui.Pages
{
    public class IndexModel : PageModel
    {
        public void OnGet()
        {
        }
    }
    // Define the SocialMediaCompany class
    public class SocialMediaCompany
    {
        public string Name { get; set; }
        public string HomeURL { get; set; }
        public string Prefix { get; set; }
    }
}
