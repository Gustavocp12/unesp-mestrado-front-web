import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  Users: any;
  copySuccess: boolean = false;

  constructor(private AuthService: AuthService, private AdminService: AdminService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  logout(){
    this.AuthService.logout();
  }

  getAllUsers(){
    this.AdminService.getAllUsers().subscribe((res: any) => {
      this.Users = res;
    })
  }

  copyCrmv(crmv: string) {
    navigator.clipboard.writeText(crmv).then(() => {
      this.copySuccess = true;
      setTimeout(() => {
        this.copySuccess = false;
      }, 3000);
    })
  }

  goToCrmv(){
    window.open('https://crmv-sp.implanta.net.br/ServicosOnline/Publico/ConsultaInscritos/', '_blank');
  }

  rejectOrApprove(IDU: number, verification: number){
    this.AdminService.rejectOrApprove(IDU, verification).subscribe(() => {
      location.reload();
    })
  }
}
