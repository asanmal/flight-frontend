import { Drone } from "../../drone/model/droneModel";

export interface Matrix {
    id?: number;
    x: number;
    y: number;
    drones?: Drone[];
}