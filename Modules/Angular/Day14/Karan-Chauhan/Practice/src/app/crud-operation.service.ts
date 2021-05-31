import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationService {

  constructor() { }

  DeleteData(obj:Array<any>,name:any){
    var data = obj.filter(x=>x.Name==name)[0];
    var i = obj.indexOf(x=>x.Name==data.name);
    obj.splice(i,1);
  }
}
