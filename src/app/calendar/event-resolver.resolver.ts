import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Params
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Event } from '../shared/event.model'
import { EventsStorageService } from './events-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolverResolver implements Resolve<any> {
  constructor(private eventStorageService: EventsStorageService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
     return this.eventStorageService.getEvent().pipe(map(responseData => 
responseData['-MnXSq7FJsAQ_VjqaBVA']
   ))
  }
}
