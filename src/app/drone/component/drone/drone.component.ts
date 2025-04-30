import { Component } from '@angular/core';
import { DroneTableComponent } from '../drone-table/drone-table.component';

@Component({
  selector: 'app-drone',
  standalone: true,
  imports: [DroneTableComponent],
  templateUrl: './drone.component.html',
  styleUrl: './drone.component.css'
})
export class DroneComponent {

}
