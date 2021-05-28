import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HeaderData } from "./header.model";

@Injectable({
  providedIn: 'root'
})

export class HeaderService {
  private _headerdata = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'home',
    routeUrl: ''
  })

  constructor() {}

  get headerData(): HeaderData {
    return this._headerdata.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerdata.next(headerData)
  }
}
