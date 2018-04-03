import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiRequestsService {

  // private apiEndpoint = 'http://localhost:4200/api/';

  /**
   * Examples
   * */
  // getUsersEndpoint:string = 'get-all-users/';
  // getHostEndpoint:string = 'get-all-hosts/';
  // createVisitEndpoint:string = 'visit/';
  //
  // getVisitEndpoint:string = 'get-all-visits/';
  // sortVisitEndpoint:string = 'get-all-visits-date/';
  // filterVisitEndpoint:string = 'filter-visits/';
  // createHostEndpoint:string = '/register-host';

  constructor(private http: HttpClient) {
  }

  /**
   * Examples
   * */
  // getUsers(): Observable<User> {
  //   return this.http.get<User>(this.apiEndpoint+this.getUsersEndpoint);
  // }
  //
  // createVisit(jsonBody): Observable<void> {
  //   return this.http.post<void>(this.apiEndpoint+this.createVisitEndpoint,jsonBody);
  // }
  //
  // getVisits(): Observable<[Visit]> {
  //   return this.http.get<[Visit]>(this.apiEndpoint+this.getVisitEndpoint);
  // }
  //
  // sortVisits(): Observable<[Visit]> {
  //   return this.http.get<[Visit]>(this.apiEndpoint+this.sortVisitEndpoint);
  // }
  //
  // getHosts(): Observable<[User]>{
  //   return this.http.get<[User]>(this.apiEndpoint+this.getHostEndpoint);
  // }
  //
  // createHost(jsonBody): Observable<void> {
  //   return this.http.post<void>(this.apiEndpoint+this.createHostEndpoint,jsonBody);
  // }
  //
  // filterVisits(dateVar): Observable<[Visit]> {
  //   return this.http.get<[Visit]>(this.apiEndpoint+this.filterVisitEndpoint + dateVar);
  // }

}
