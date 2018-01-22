import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ErrorService {
  errorBus: Subject<string> = new Subject();
  constructor() { }
  sendError(err:string){
    if(err){
      this.errorBus.next(err)
    }
  }
}
