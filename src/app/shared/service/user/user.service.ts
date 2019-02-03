import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public API = 'https://jsonplaceholder.typicode.com/';

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};


constructor(private http: HttpClient) {
}

private extractData(res: Response) {
    const body = res;
    return body || {};
}

getAllUsers(): Observable<any> {
    return this.http.get(this.API + 'users').pipe(
        map(this.extractData));
}

getUserById(id): Observable<any> {
    return this.http.get(this.API + 'users/' + id).pipe(
        map(this.extractData));
}


private handleError(error: any): Promise<any> {
console.error('An error occurred', error); // for demo purposes only
return Promise.reject(error.message || error);
}
}
