import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GraphVisualizationServices {

  constructor(private http: HttpClient) { }

  public getList() {
    return this.http.get('http://localhost:3000/graph', { observe: 'response' });
  }
}
