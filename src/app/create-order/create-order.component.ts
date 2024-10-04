import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { BondService } from '../services/bond.service';
import { BondModel } from '../models/bond.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AccountModel } from '../models/account.model';
import { AccountService } from '../services/account.service';
import { OrderService } from '../services/order.service';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from '../components/dialog/dialog.component';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [
    HttpClientModule, 
    CommonModule, 
    MatCardModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [BondService, AccountService, OrderService],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss'
})
export class CreateOrderComponent {
  data: FormGroup;
  bondId: number | null = null;
  bond: BondModel | null = null;
  account: AccountModel | null = null;

  constructor(
    private readonly router: Router,
    private readonly bondService: BondService,
    private readonly accountService: AccountService,
    private readonly orderService: OrderService,
    public readonly dialog: MatDialog,
  ) {
    this.bondId = history.state.bondId;
    console.log(history.state.bondId);
    this.data = new FormGroup({
      quantity: new FormControl('0.10', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getRecordBond(this.bondId);
    this.getRecordAccount(-1);
  }

  async getRecordAccount(id: number | null) {
    if (id) {
      this.accountService
        .getId(id)
        .subscribe((data) => {
          this.account = data;
        });
    }
  }

  async getRecordBond(id: number | null) {
    if (id) {
      this.bondService
        .getId(id)
        .subscribe((data) => {
          this.bond = data;
        });
    }
  }

  async create() {
    if (this.data.valid) {
      const data = this.data.value;
      data.bondId = this.bondId;
      data.accountId = this.account?.id;
      data.type = 1;
      this.orderService
        .create(data)
        .subscribe((data) => {
          const dialogRef: MatDialogRef<any> = this.dialog.open(DialogComponent, {
            width: '390px',
            data: {
              message: 'Ordem de compra criada com sucesso!',
              title: 'Sucesso!',
            },
          });
      
          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              this.router.navigate(['/orders']);
            }
          });
        });
    }
  }
}
