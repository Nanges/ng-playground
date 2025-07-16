import { DestroyRef, Directive, ElementRef, inject, OnInit } from '@angular/core';
import { FieldComponent } from './field.component';
import { distinctUntilChanged, map } from 'rxjs';
import { Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[appLabel]',
  standalone: false
})
export class LabelDirective implements OnInit{

  readonly #field = inject(FieldComponent);
  readonly #destroyRef = inject(DestroyRef);
  readonly #host = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() { }

  ngOnInit(): void {
    this.#field.statusChange.pipe(
      map(() => this.#field.control?.hasValidator(Validators.required) ?? false),
      distinctUntilChanged(),
      takeUntilDestroyed(this.#destroyRef)
    ).subscribe(isRequired => {
      if(isRequired) this.#host.nativeElement.classList.add("label-required");
      else this.#host.nativeElement.classList.remove("label-required");
    })
  }
}
