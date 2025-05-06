import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DroneService } from '../../services/drone.service';
import { Drone, DroneOrientation } from '../../model/droneModel';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'drone-table',
  templateUrl: 'drone-table.component.html',
  standalone: true,
  imports: [
    HttpClientModule,
    TableModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    DialogModule
  ],
  providers: [DroneService],
  styleUrl: './drone-table.component.css'
})
export class DroneTableComponent implements OnInit {
  drones: Drone[] = [];
  allDrones: Drone[] = [];
  cols: Column[] = [];
  selectedDrone: Drone = {} as Drone;
  isNew = false;
  displayDialog = false;

  // — Filtros —
  filterId: number | null = null;
  filterX: number | null = null;
  filterY: number | null = null;
  filterMatrixId: number | null = null;

  constructor(private readonly droneService: DroneService) {}

  ngOnInit() {
    this.cols = [
      { field: 'dronId', header: 'Id' },
      { field: 'nombre', header: 'Name' },
      { field: 'modelo', header: 'Model' },
      { field: 'x', header: 'X' },
      { field: 'y', header: 'Y' },
      { field: 'orientacion', header: 'Orientation' },
      { field: 'matrizId', header: 'Matrix' },
      { field: 'action', header: 'Action' }
    ];
    this.getDrones();
  }

  getDrones(): void {
    this.droneService.getDrones().subscribe({
      next: data => this.drones = data,
      error: err => console.error('Error al obtener drones:', err)
    });
  }

  // — Crear dron —
  onCreateDrone(): void {
    this.isNew = true;
    this.selectedDrone = {
      nombre: '',
      modelo: '',
      x: 0,
      y: 0,
      orientacion: DroneOrientation.N,
      matrizId: 0
    } as Drone;
    this.displayDialog = true;
  }

  // — Editar dron —
  openEditDialog(dron: Drone): void {
    this.isNew = false;
    this.selectedDrone = { ...dron };
    this.displayDialog = true;
  }

  // — Guardar (crear o actualizar) —
  onSubmitDrone(): void {
    const call$ = this.isNew
      ? this.droneService.createDrone(this.selectedDrone)
      : this.droneService.updateDrone(this.selectedDrone);

    call$.subscribe({
      next: dr => {
        if (this.isNew) {
          this.drones = [...this.drones, dr];
        } else {
          const idx = this.drones.findIndex(d => d.dronId === dr.dronId);
          if (idx > -1) this.drones[idx] = dr;
        }
        this.closeDialog();
      },
      error: err => console.error('Error creando/actualizando dron:', err)
    });
  }

  // — Cerrar diálogo y reset flag —
  closeDialog(): void {
    this.displayDialog = false;
    this.isNew = false;
  }

  // — Borrar dron —
  onDeleteDrone(dron: Drone): void {
    if (!dron.dronId) {
      console.error('ID del dron no definido. Abortando eliminación.');
      return;
    }
    this.droneService.deleteDrone(dron.dronId).subscribe({
      next: () => {
        this.drones = this.drones.filter(d => d.dronId !== dron.dronId);
        this.getDrones();
      },
      error: err => console.error('Error al eliminar el dron:', err)
    });
  }
 

  // — Filtrar por X, Y y Matrix ID —
  filterByXY(): void {
    if (
      this.filterX != null &&
      this.filterY != null &&
      this.filterMatrixId != null
    ) {
      this.droneService
        .getDroneByXAndY(this.filterX, this.filterY, this.filterMatrixId)
        .subscribe({
          next: dron => {
            // Aquí dron es un objeto único, así que lo metemos en un array:
            this.drones = [dron];
          },
          error: err => {
            console.error('Error filtrando por X/Y:', err);
            this.drones = [];
          }
        });
    }
  }

  // — Limpiar filtros y recargar —
  clearFilters(): void {
    this.filterId = this.filterX = this.filterY = this.filterMatrixId = null;
    this.getDrones();
  }
}
