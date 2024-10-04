import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService, ResponseService } from "./base.service";
import { OrderModel, OrderRequestCreateModel, OrderRequestGetAllModel } from "../models/order.model";
import { OperationModel } from "../models/operation.model";

@Injectable({
  providedIn: "root",
})
export class OrderService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  create(data: OrderRequestCreateModel): Observable<ResponseService<OperationModel>> {
    const url = `${this.baseUrl}/orders`;
    return this.http.post(url, data) as Observable<ResponseService<OperationModel>>;
  }

  get(
    accountId: number,
    parametros: OrderRequestGetAllModel
  ): Observable<ResponseService<OrderModel[]>> {
    let params = new HttpParams();

    Object.keys(parametros).forEach((key) => {
      if (!!(parametros as any)[key] || (parametros as any)[key] === 0) {
        params = params.append(key, (parametros as any)[key].toString());
      }
    });

    const url = `${this.baseUrl}/orders/account/${accountId}`;
    return this.http.get(url, { params }) as Observable<
    ResponseService<OrderModel[]>
    >;
  }
}
