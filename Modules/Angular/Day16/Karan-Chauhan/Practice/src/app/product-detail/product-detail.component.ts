import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[ProductService]
})
export class ProductDetailComponent implements OnInit{
  product:Product;
  id;
   
   constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router,
               private _productService:ProductService,
              ){
              


                 
   }

   sub;
 
   ngOnInit() {
 
      this.sub=this._Activatedroute.paramMap.subscribe(params => { 
         console.log(params);
          this.id = params.get('id'); 
          let product=this._productService.getProducts();
          this.product = product.find(p=>p.productID==this.id);
         // this.product=products.find(p => p.productID==this.id);    
      });

      // this.id=this._Activatedroute.snapshot.params['id'];
      //  let products=this._productService.getProducts();
      //  this.product=products.find(p => p.productID==this.id);
 
     }

     ngOnDestroy() {
      this.sub.unsubscribe();
    }
    
    onBack(): void {
       this._router.navigate(['product']);
    }

}
