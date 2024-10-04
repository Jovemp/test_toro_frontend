import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card'
import {MatPaginatorModule} from '@angular/material/paginator'
import { BondModel } from '../models/bond.model';
import { BondService } from '../services/bond.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatGridListModule, MatPaginatorModule, MatCardModule, RouterLink, RouterOutlet],
  providers: [BondService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  itens: BondModel[] = []; 
  pageSizeOptions: number[] = [6, 9, 12, 15];
  pageSize: number = 9; 
  totalItems: number = 0; 

  constructor(
    private bondService: BondService,
  ) {}

  ngOnInit(): void {
    this.getRecords(1, this.pageSize);
  }

  onPageChange = (e: any) => {
    this.getRecords(
      e.pageIndex +1,
      e.pageSize,
    );
  };

  getRecords = (
    pageIndex: number,
    pageSize: number,
  ) => {
    this.bondService
      .get({
        pageNumber: pageIndex,
        pageSize: pageSize,
        sortField: 'tax',
        sortDescending: true
      })
      .subscribe((data) => {
        this.totalItems = data.totalCount!;
        this.itens = data.items!;
      });
  };
}
