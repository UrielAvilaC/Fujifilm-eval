import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultSet } from 'src/app/interfaces/Common/ResultSet';
import { ProductViewModel } from 'src/app/interfaces/Product/Product';
import { APIMETHODS, APIPRODUCT } from '../common/api-constants/api-constant';
import { RestService } from '../common/restService/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private restService: RestService) { }

  SELECT(filter: ProductViewModel): Observable<ResultSet<ProductViewModel[]>> {
    return this.restService.makeRequest<ResultSet<ProductViewModel[]>>(APIMETHODS.POST, APIPRODUCT.SELECT, filter);
  }
  SAVE(model : ProductViewModel) : Observable<any>
  {
    return this.restService.makeRequest(APIMETHODS.POST, APIPRODUCT.SELECT, model);
  }
  DELETE(id : number) : Observable<any>
  {
    return this.restService.makeRequest(APIMETHODS.POST, APIPRODUCT.SELECT, {"id" : id});
  }
}
