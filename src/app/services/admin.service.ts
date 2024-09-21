import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public getAllUsers() {
    return this.http.get(environment.api + '/getAllUsersUndefined');
  }

  public rejectOrApprove(IDU: number, verification: number) {
    return this.http.post(environment.api + '/rejectOrApproveUser', {IDU, verification});
  }
}
