import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataSendingService {

  constructor() { }

  protected object1Data = new Subject<any>();
  protected object2Data = new Subject<any>();
  protected object3Data = new Subject<any>();
  protected object4Data = new Subject<any>();

  getObject1Data = this.object1Data.asObservable();
  getObject2Data = this.object2Data.asObservable();
  getObject3Data = this.object3Data.asObservable();
  getObject4Data = this.object4Data.asObservable();

  sendObject1Data(message: any) {
    this.object1Data.next(message);
  }

   sendObject2Data(message: any) {
    this.object2Data.next(message);
  }

  sendObject3Data(message: any) {
    this.object3Data.next(message);
  }

  sendObject4Data(message: any) {
    this.object4Data.next(message);
  }

    clearData() {
        this.object1Data.next();
        this.object2Data.next();
        this.object3Data.next();
        this.object4Data.next();
    }
}
