import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { Matrix } from '../model/matrixModel';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MatrixService {

  private readonly url = `${environment.apiUrl}/matriz`;

  constructor(private readonly http:HttpClient) { }

  getMatrix(id: number): Observable<Matrix> {
    return this.http.get<Matrix>(`${this.url}/${id}`);
  }

  getAllMatrix(): Observable<Matrix[]> {
    return this.http.get<Matrix[]>(`${this.url}/list`);
  }

  createMatrix(matrix: Matrix): Observable<Matrix> {
    return this.http.post<Matrix>(`${this.url}/create`, matrix);
  }

  updateMatrix(matrix: Matrix): Observable<Matrix> {
    return this.http.put<Matrix>(`${this.url}/edit/${matrix.id}`, matrix);
  }

  deleteMatrix(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`);
  }
}
