export enum FlightMovement {
    MOVE_FORWARD = 'MOVE_FORWARD',
    TURN_LEFT = 'TURN_LEFT',
    TURN_RIGHT = 'TURN_RIGHT'
}

export interface FlightCommand {
    droneId: number;
    command: FlightMovement;
}