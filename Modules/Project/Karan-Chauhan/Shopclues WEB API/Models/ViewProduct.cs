using System;
using System.Collections.Generic;

#nullable disable

namespace Shopclues_WEB_API.Models
{
    public partial class ViewProduct
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }
        public decimal? Price { get; set; }
        public string Description { get; set; }
    }
}
