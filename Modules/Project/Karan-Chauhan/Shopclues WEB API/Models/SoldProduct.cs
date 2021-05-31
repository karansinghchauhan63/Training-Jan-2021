using System;
using System.Collections.Generic;

#nullable disable

namespace Shopclues_WEB_API.Models
{
    public partial class SoldProduct
    {
        public string UserId { get; set; }
        public int? ProductId { get; set; }
        public decimal? Price { get; set; }
        public string Description { get; set; }
        public string Geolocation { get; set; }
        public DateTime? SoldDate { get; set; }
        public string DeliveryAddress { get; set; }

        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}
