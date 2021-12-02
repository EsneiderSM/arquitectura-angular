import { Observable, throwError } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { environment } from "../../../environments/environment";
import { HeadersConfig } from "../../config/headers";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { ListResponseModel } from '../models/common/list-response.model';

export abstract class BaseService<TModel> {
  public headersConfig: HeadersConfig = new HeadersConfig();

  constructor(
    protected _httpClient: HttpClient,
    protected _apiRoot: string = environment.apiURL,
    protected _serviceEndpoints: any
  ) {}

  handleError(ex: any): Observable<any> {
    const errorModel: any = "";
    return throwError(errorModel);
  }

  getAll(): Observable<ListResponseModel<TModel>> {
    
    const apiURL = `${this._apiRoot}${this._serviceEndpoints.getAll}`;

    return this._httpClient.get<ListResponseModel<TModel>>(apiURL)
      .map((resp: ListResponseModel<TModel>) => {
        return  resp;
      })
      .pipe(
        catchError(this.handleError)
      );

  }

}
