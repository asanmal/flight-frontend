export enum DroneOrientation {
    N = 'N',
    S = 'S',
    E = 'E',
    O = 'O'
  }

export interface Drone {
    dronId?: number;
    nombre: string;
    modelo: string;
    x: number;
    y: number;
    orientacion: DroneOrientation;
    matrizId: number;
  }
  