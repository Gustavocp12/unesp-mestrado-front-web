import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public getAllUsers() {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(environment.api + '/getAllUsersUndefined', {headers});
  }

  public rejectOrApprove(IDU: number, verification: number) {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.put(environment.api + '/rejectOrApproveUser', {IDU, verification}, {headers});
  }
}
