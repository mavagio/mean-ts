import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiRequestsService {

  private apiEndpoint = 'http://localhost:4200/api/';
  private testEndpoint = 'test/';

  constructor(private http: HttpClient) {
  }

  getTests(): Observable<any> {
    return this.http.get<any>(this.apiEndpoint + this.testEndpoint);
  }

  postTest(jsonBody): Observable<void> {
    return this.http.post<void>(this.apiEndpoint + this.testEndpoint, jsonBody);
  }
}
