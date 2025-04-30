import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DroneService } from '../../services/drone.service';
import { Drone } from '../../model/droneModel';
import { HttpClientModule } from '@angular/common/http';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'drone-table',
    templateUrl: 'drone-table.component.html',
    standalone: true,
    imports: [HttpClientModule, TableModule, CommonModule],
    providers: [DroneService]
})
export class DroneTableComponent implements OnInit{
    drones!: Drone[];
    cols!: Column[];

    constructor(private readonly droneService: DroneService) {}

    ngOnInit() {
        this.cols = [
            { field: 'dronId', header: 'Id' },
            { field: 'nombre', header: 'Name' },
            { field: 'modelo', header: 'Model' },
            { field: 'x', header: 'X' },
            { field: 'y', header: 'Y' },
            { field: 'orientacion', header: 'Orientation' },
            //{ field: 'ordenes', header: 'Order' },
            { field: 'matrizId', header: 'Matrix' }
            //{ field: 'action', header: 'Action' }
            
        ];

        this.droneService.getDrones().subscribe({
            next: (data) => {
                console.log("Drones recibidos:", data);
                this.drones = data;
                console.log("Drones asignados:", this.drones);  // Verifica si los datos fueron asignados correctamente
  
            },
            error: (error) => {
                console.error('Error fetching drones:', error);
            }
        })
    }
}