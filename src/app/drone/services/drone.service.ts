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
    return this.http.get<Drone[]>(`${this.url}/list`);
  }

  getDrone(matrizId: number): Observable<Drone> {
    return this.http.get<Drone>(`${this.url}/list/${matrizId}`);
  }

  getDroneByXAndY(x: number, y: number, matrizId: number): Observable<Drone> {
    return this.http.get<Drone>(`${this.url}/list/${x}/${y}/${matrizId}`);
  }

  createDrone(drone: Drone): Observable<Drone> {
    return this.http.post<Drone>(`${this.url}/create`, drone);
  }

  updateDrone(drone: Drone): Observable<Drone> {
    return this.http.put<Drone>(`${this.url}/edit/${drone.dronId}`, drone);
  }

  deleteDrone(droneId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${droneId}`);
  }
}
