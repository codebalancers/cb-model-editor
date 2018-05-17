import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface ModelEntry {
  module: string;
  filename: string;
  date: string;
  size: number;
}


@Injectable()
export class ModelAdapter {
  constructor(private http: HttpClient) {
  }

  public getModels(): Observable<ModelEntry[]> {
    return Observable.of([
      {
        module: 'account',
        filename: 'Test.json',
        date: '01-01-1970',
        size: 12345
      }
    ]);
  }
}
