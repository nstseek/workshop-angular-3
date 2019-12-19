import { AbstractControl, FormGroup } from '@angular/forms';

export interface TypedAbstractControl<T> extends AbstractControl {
  name?: string;
  value: T;
  patchValue(value: T);
  setValue(value: T);
  reset(value?: T);
}

export interface TypedFormGroup<K, T> extends Omit<FormGroup, 'controls'> {
  value: K;
  values: K;
  controls: T;
  patchValue(value: K);
  setValue(value: K);
  reset(value?: K);
}
