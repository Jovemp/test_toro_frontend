import { AccountModel } from "./account.model";
import { BondModel } from "./bond.model";

export interface OrderModel {
    id: number;
    date: Date;
    quantity: number;
    type: number;
    status: number;
    bondId: number ;
    bond?: BondModel;
    accountId: number;
    account?: AccountModel;
}

export interface OrderRequestCreateModel {
    bondId: number;
    quantity: number;
    type: number;
    accountId: number;
}

export interface OrderRequestGetAllModel {
    filterField?: string;
    filterValue?: string;
    sortField?: string;
    sortDescending?: boolean;
    pageNumber?: number;
    pageSize?: number;
} 


