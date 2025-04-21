import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightCommand } from '../model/flightModel';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroment/enviroment';

@Injectable({  providedIn: 'root'})
export class FlightService {
  private readonly url =  `${environment.apiUrl}/flight `;

  constructor(private readonly http:HttpClient) {}

  executeCommand(command: FlightCommand): Observable<void> {
    return this.http.post<void>(`${this.url}/${command.droneId}`, command);
  }

  executeCommandGroup(command: FlightCommand[]): Observable<void> {
    return this.http.post<void>(`${this.url}/group`, command);
  }
}
