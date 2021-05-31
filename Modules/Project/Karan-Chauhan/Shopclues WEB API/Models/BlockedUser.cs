using System;
using System.Collections.Generic;

#nullable disable

namespace Shopclues_WEB_API.Models
{
    public partial class BlockedUser
    {
        public string Username { get; set; }
        public string EmailId { get; set; }
        public virtual User Email { get; set; }
    }
}
