import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminMessageService {
  
  subject = new Subject<Array<string>>();
  messages: Array<string> = [];

  constructor() { }

  add(message: string): void {
    this.messages.push(message);
    this.subject.next(this.messages);
  }

  clear() {
    this.messages = [];
  }

  addSpringErrors(error: any): void {
    this.clear();
    if (error.errors?.length > 0) {
      for(let message of error.errors) {
        this.messages.push("Pole:  " + message.field + " -> " + message.defaultMessage)
      }
    } else {
      this.messages.push(error.messages);
    }
    this.subject.next(this.messages);
  }
}
