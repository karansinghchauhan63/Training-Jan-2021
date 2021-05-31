using System;
using System.Collections.Generic;

#nullable disable

namespace Shopclues_WEB_API.Models
{
    public partial class User
    {
        public string Username { get; set; }
        public string EmailId { get; set; }
        public string ContactNumber { get; set; }
        public string Password { get; set; }
    }
}
