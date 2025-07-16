import { ChangeDetectionStrategy, Component, ContentChild, HostBinding, HostListener } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { BehaviorSubject, distinctUntilChanged, map, of, startWith, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-field',
  template:'<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class FieldComponent {
  @ContentChild(NgControl)
  set ngControl(ngControl: NgControl){
    this.#control.next(ngControl?.control ?? null);
  }

  readonly #control = new BehaviorSubject<AbstractControl|null>(null);
  
  readonly statusChange = this.#control.asObservable().pipe(
    switchMap(() => this.control 
      ? this.control.statusChanges.pipe(
          startWith(this.control?.status ?? null),
          distinctUntilChanged()
        )
      : of(null)
    )
  );
  
  get control(){
    return this.#control.value;
  }

  @HostBinding("class.ng-touched")
  get isTouched(){
    return this.control?.touched ?? false;
  }

  @HostBinding("class.ng-untouched")
  get isUntouched(){
    return this.control?.untouched ?? false;
  }
}
