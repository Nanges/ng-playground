import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FieldModule } from '@shared/field/field.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FieldModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'ng-playground';
  control = new FormControl(null, Validators.required)
  toggle = true;

  reset(){
    this.control.reset();
  }

  clearValidator(){
    this.control.clearValidators();
    this.control.updateValueAndValidity();
  }

  addValidator(){
    this.control.addValidators(Validators.required);
    this.control.updateValueAndValidity();
  }
}
