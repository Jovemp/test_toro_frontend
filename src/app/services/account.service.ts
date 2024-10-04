import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";
import { AccountModel } from "../models/account.model";

@Injectable({
  providedIn: "root",
})
export class AccountService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  getId(
    accountId: number,
  ): Observable<AccountModel> {
    let params = new HttpParams();

    const url = `${this.baseUrl}/accounts/${accountId}`;
    return this.http.get(url, { params }) as Observable<
      AccountModel
    >;
  }
}
