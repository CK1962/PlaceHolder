import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ITodo } from "../interfaces/itodo";


@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  constructor(private http: HttpClient) { }

  get(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");
  }
}
