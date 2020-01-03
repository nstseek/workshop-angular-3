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

interface lul {
  a?: number;
  b: number;
}

interface lal {
  a: number;
}

interface lel {
  z: string;
}

const obj1: lul = {
  a: 1,
  b: 2
};

const obj2: lal = obj1 as lal;

const obj3: lel = obj1 as unknown as lel;

// const obj4: Date = false as Date;
