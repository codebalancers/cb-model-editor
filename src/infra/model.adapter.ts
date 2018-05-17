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
    return this.http.get<ModelEntry[]>('/api/models');
  }

  public getModel(module: string, filename: string): Observable<{}> {
    return this.http.get(`/api/models/${module}/${filename}`);
  }

  public updateModel(module: string, filename: string, model: {}): Observable<void> {
    return this.http
      .put(`/api/models/${module}/${filename}`, model)
      .map(() => null);
  }
}
