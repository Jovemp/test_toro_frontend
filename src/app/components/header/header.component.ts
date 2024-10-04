import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AccountModel } from '../../models/account.model';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink, RouterOutlet],
  providers: [AccountService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  account: AccountModel | null = null; 
  
  constructor(
    private accountService: AccountService,
  ) {}

  ngOnInit(): void {
    this.getRecord (-1);
  }

  getRecord = (
    id: number,
  ) => {
    this.accountService
      .getId(-1)
      .subscribe((data) => {
        console.log(data);
        this.account = data;
      });
  };

}
