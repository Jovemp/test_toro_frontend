import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderModel } from '../models/order.model';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, HttpClientModule, CommonModule, MatPaginatorModule],
  providers: [OrderService],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  itens: OrderModel[] = []; 
  pageSizeOptions: number[] = [6, 9, 12, 15];
  pageSize: number = 9; 
  totalItems: number = 0; 
  
  constructor(
    private orderService: OrderService,
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

  getStatusDescription(status: number): string {
    switch (status) {
      case 0:
        return 'Aguardando';
      case 1:
        return 'Processando';
      case 2:
        return 'Finalizada';
      case 3:
        return 'Cancelada';
      default:
        return 'Status desconhecido';
    }
  }

  getRecords = (
    pageIndex: number,
    pageSize: number,
  ) => {
    this.orderService
      .get(-1, {
        pageNumber: pageIndex,
        pageSize: pageSize,
        sortField: 'date',
        sortDescending: true
      })
      .subscribe((data) => {
        this.totalItems = data.totalCount!;
        this.itens = data.items!;
      });
  };

}
