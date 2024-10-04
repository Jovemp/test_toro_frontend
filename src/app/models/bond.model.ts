export interface BondModel {
    id: number;
    bondAsset: string;
    index: string;
    tax: number;
    issuerName: string;
    unitPrice: number;
    stock: number;
}

export interface BondRequestGetAllModel {
    filterField?: string;
    filterValue?: string;
    sortField?: string;
    sortDescending?: boolean;
    pageNumber: number;
    pageSize: number;
}
