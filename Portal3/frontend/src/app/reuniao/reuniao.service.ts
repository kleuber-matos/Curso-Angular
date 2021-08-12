
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Reuniao } from './reuniao.entity';
import { Environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ReuniaoService {

  // url = 'http://localhost:8181/comiss-servicosweb/comissaoonline/Reuniao/20191002'; // api rest fake
  // url = '20191002'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json'
  // })
  // }

  // Obtem todos os carros
  getReunioes(): Observable<Reuniao[]> {
    return this.httpClient.get<Reuniao[]>(`${Environment.apiUrl}/reuniao`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };

}
