import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TypedAbstractControl, TypedFormGroup } from 'src/app/types';

type FormFieldsNumbers = 'idade';

type FormFieldsString = 'nome' | 'cidade';

type FormFieldsBools = 'sexo';

type FormField = Record<FormFieldsNumbers, TypedAbstractControl<number>> &
  Record<FormFieldsString, TypedAbstractControl<string>> &
  Record<FormFieldsBools, TypedAbstractControl<boolean>>;

type FormFieldObj = Record<FormFieldsNumbers, number> &
  Record<FormFieldsString, string> &
  Record<FormFieldsBools, boolean>;

const formFieldObj: FormFieldObj = {
  cidade: null,
  idade: null,
  nome: null,
  sexo: false
};

@Component({
  selector: 'app-form-tipado',
  templateUrl: './form-tipado.component.html',
  styleUrls: ['./form-tipado.component.scss']
})
export class FormTipadoComponent implements OnInit {
  form = (this.fb.group(formFieldObj) as unknown) as TypedFormGroup<
    FormFieldObj,
    FormField
  >;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    Object.keys((key: string) => {
      this.form.controls[key].name = key;
    });
  }
}
