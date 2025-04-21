import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatrixComponent } from './matrix/component/matrix/matrix.component';
import { DroneComponent } from './drone/component/drone/drone.component';
import { FlightComponent } from './flight/component/flight/flight.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '/matrix', component: MatrixComponent},
    {path: '/drone', component: DroneComponent},
    {path: '/flight', component: FlightComponent},
    {path: '***', redirectTo: '', pathMatch: 'full'}
];
