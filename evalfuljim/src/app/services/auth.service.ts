import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PersonViewModel, UserViewModel } from '../interfaces/auth/authViewModel';
import { ResultSet } from '../interfaces/Common/ResultSet';
import { APIAUTH, APIMETHODS } from './common/api-constants/api-constant';
import { RestService } from './common/restService/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private restService : RestService, private http: HttpClient) {}

  Auth (model : UserViewModel) : Observable<ResultSet<UserViewModel>>
  {
    return this.restService.makeRequest<ResultSet<PersonViewModel>>(APIMETHODS.POST, APIAUTH.AUTH,model);
  }
}
