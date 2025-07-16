import { DestroyRef, Directive, inject, input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { FieldComponent } from './field.component';
import { merge, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[appError]',
  standalone: false
})
export class ErrorDirective implements OnInit {
  readonly #field = inject(FieldComponent);
  readonly appError = input.required<string>();
  readonly #templateRef = inject(TemplateRef);
  readonly #viewContainerRef = inject(ViewContainerRef);
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const key = this.appError();

    this.#field.statusChange.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe(() => {
        const control = this.#field.control;
        this.#viewContainerRef.clear();

        if(control?.hasError(key))
          this.#viewContainerRef.createEmbeddedView(this.#templateRef, {$implicit: control.errors});
    });
  }
}
