import { ChangeDetectionStrategy, Component, ContentChild, HostBinding, HostListener } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { BehaviorSubject, map, of, startWith, Subject, switchMap } from 'rxjs';

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
  readonly #focusChange = new Subject<void>();
  
  readonly statusChange = this.#control.asObservable().pipe(
    switchMap(ctrl => ctrl 
      ? ctrl.statusChanges.pipe(startWith(ctrl), map(() => ctrl))
      : of(null)
    )
  );

  readonly focusChange = this.#focusChange.asObservable();

  @HostListener("focusout")
  focusoutHandler(){
    this.#focusChange.next();
  }

  @HostBinding("class.ng-touched")
  get isTouched(){
    return this.#control.value?.touched ?? false;
  }

  @HostBinding("class.ng-untouched")
  get isUntouched(){
    return this.#control.value?.untouched ?? false;
  }
}
