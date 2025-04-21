import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drone } from '../model/droneModel';

@Injectable({ providedIn: 'root' })
export class DroneService {
  private readonly url = `${environment.apiUrl}/dron`;

  constructor(private readonly http:HttpClient) {}

  getDrones(): Observable<Drone[]> {
    return this.http.get<Drone[]>(this.url);
  }

  getDrone(id: number): Observable<Drone> {
    return this.http.get<Drone>(`${this.url}/${id}`);
  }

  getDroneByXAndY(x: number, y: number, matrixId: number): Observable<Drone[]> {
    return this.http.get<Drone[]>(`${this.url}/x/${x}/y/${y}/matrix/${matrixId}`);
  }

  createDrone(drone: Drone): Observable<Drone> {
    return this.http.post<Drone>(this.url, drone);
  }

  updateDrone(drone: Drone): Observable<Drone> {
    return this.http.put<Drone>(`${this.url}/${drone.id}`, drone);
  }

  deleteDrone(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
