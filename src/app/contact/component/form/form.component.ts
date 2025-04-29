import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl ,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'contact-form',
  imports: [ButtonModule ,ReactiveFormsModule, FormsModule, InputTextModule, IftaLabelModule, TextareaModule],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  encapsulation: ViewEncapsulation.None
})

export class FormComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;
  subject: string | undefined;
  message: string | undefined;
  formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            message: new FormControl<string | null>(null)
        });
    }
}
