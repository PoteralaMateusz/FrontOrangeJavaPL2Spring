import { Injectable } from '@angular/core';
import {enviroment} from "../enviroment/enviroment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bread} from "./entity/Bread";

@Injectable({
  providedIn: 'root'
})
export class BreadService {
private apiServerUrl = enviroment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getBreads():Observable<Bread[]>{
    return this.http.get<Bread[]>(`${this.apiServerUrl}/breads`);
  }
}
