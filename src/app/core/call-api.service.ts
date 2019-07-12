import { Injectable } from '@angular/core';

@Injectable()
export class CallApiService {

  constructor() { }

  get(): string {
    return "Hi!"
  }
}
