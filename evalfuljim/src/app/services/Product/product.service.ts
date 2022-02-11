import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultSet } from 'src/app/interfaces/Common/ResultSet';
import { LogProductViewModel, ProductViewModel } from 'src/app/interfaces/Product/Product';
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
    return this.restService.makeRequest(APIMETHODS.POST, APIPRODUCT.SAVE, model);
  }
  DELETE(id : number) : Observable<ResultSet<boolean>>
  {
    return this.restService.makeRequest<ResultSet<boolean>>(APIMETHODS.GET, APIPRODUCT.DELETE, {"id" : id});
  }
  VIEWRECORD(id : number) : Observable<ResultSet<ProductViewModel>>
  {
    return this.restService.makeRequest<ProductViewModel>(APIMETHODS.GET, APIPRODUCT.VIEWRECORS, {"id" : id});
  }
  LOG(id : number) : Observable<ResultSet<LogProductViewModel[]>>
  {
    return this.restService.makeRequest<LogProductViewModel[]>(APIMETHODS.GET, APIPRODUCT.LOG, {"id" : id});
  }
}
