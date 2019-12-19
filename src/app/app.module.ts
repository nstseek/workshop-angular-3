import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifComponent } from './pages/ngif/ngif.component';
import { NgforComponent } from './pages/ngfor/ngfor.component';
import { ViewchildComponent } from './pages/viewchild/viewchild.component';
import { InputComponent } from './pages/input/input.component';
import { OutputComponent } from './pages/output/output.component';
import { FormTipadoComponent } from './pages/form-tipado/form-tipado.component';
import { ChildcompComponent } from './components/childcomp/childcomp.component';
import { InpcompComponent } from './components/inpcomp/inpcomp.component';
import { OutcompComponent } from './components/outcomp/outcomp.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgforComponent,
    ViewchildComponent,
    InputComponent,
    OutputComponent,
    FormTipadoComponent,
    ChildcompComponent,
    InpcompComponent,
    OutcompComponent,
    RxjsComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
