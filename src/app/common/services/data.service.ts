import { NotFoundError } from './../errors/not-found-error';
import { AppError } from '../errors/app-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url, {responseType: "json"})
            .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse)
  {
    if(error.status === 404)
      return throwError(new NotFoundError(error));
      
    return throwError(new AppError(error));
  }
  
}
