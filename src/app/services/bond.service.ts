import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService, ResponseService } from "./base.service";
import { BondModel, BondRequestGetAllModel } from "../models/bond.model";

@Injectable({
  providedIn: "root",
})
export class BondService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  get(
    parametros: BondRequestGetAllModel
  ): Observable<ResponseService<BondModel[]>> {
    let params = new HttpParams();

    Object.keys(parametros).forEach((key) => {
      if (!!(parametros as any)[key] || (parametros as any)[key] === 0) {
        params = params.append(key, (parametros as any)[key].toString());
      }
    });

    const url = `${this.baseUrl}/bonds`;
    return this.http.get(url, { params }) as Observable<
    ResponseService<BondModel[]>
    >;
  }

  getId(
    id: number
  ): Observable<BondModel> {
    let params = new HttpParams();

    const url = `${this.baseUrl}/bonds/${id}`;
    return this.http.get(url) as Observable<
      BondModel
    >;
  }
}
