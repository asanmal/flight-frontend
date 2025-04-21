export enum DroneOrientation {
    N = 'N',
    S = 'S',
    E = 'E',
    O = 'O'
  }

export interface Drone {
    id?: number;
    name: string;
    model: string;
    x: number;
    y: number;
    orientation: DroneOrientation;
    matrixId: number;
  }
  