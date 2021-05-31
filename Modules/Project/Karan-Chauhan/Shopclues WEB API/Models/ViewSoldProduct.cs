using System;
using System.Collections.Generic;

#nullable disable

namespace Shopclues_WEB_API.Models
{
    public partial class ViewSoldProduct
    {
        public string UserId { get; set; }
        public int? ProductId { get; set; }
        public decimal? Price { get; set; }
        public string Description { get; set; }
        public string DeliveryAddress { get; set; }
    }
}
