import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompserviceService {

  constructor() { }
  SharingData = new Subject<any>()
}
