import { HttpClient } from '@angular/common/http';
import { config } from '../config/config';

export interface Message {
  message: string;
}
export abstract class ResponseService<T> {
  items?: T;
  totalCount?: number;
}

export abstract class BaseService {
  protected baseUrl: string;

  constructor(protected http: HttpClient) {
    this.baseUrl = config.baseUrl + '';
  }
}