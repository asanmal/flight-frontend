import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
    selector: 'home-splitter',
    templateUrl: './splitter.component.html',
    standalone: true,
    imports: [SplitterModule],
    styleUrls: ['./splitter.component.css']
})
export class SplitterComponent {}