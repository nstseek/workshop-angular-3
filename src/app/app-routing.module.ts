import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTipadoComponent } from './pages/form-tipado/form-tipado.component';
import { InputComponent } from './pages/input/input.component';
import { OutputComponent } from './pages/output/output.component';
import { ViewchildComponent } from './pages/viewchild/viewchild.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { NgifComponent } from './pages/ngif/ngif.component';
import { NgforComponent } from './pages/ngfor/ngfor.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';


const routes: Routes = [
  {
    path: 'form',
    component: FormTipadoComponent
  },
  {
    path: 'input',
    component: InputComponent
  },
  {
    path: 'output',
    component: OutputComponent
  },
  {
    path: 'viewchild',
    component: ViewchildComponent
  },
  {
    path: 'rxjs',
    component: RxjsComponent
  },
  {
    path: 'ngif',
    component: NgifComponent
  },
  {
    path: 'ngfor',
    component: NgforComponent
  },
  {
    path: 'lifecycle',
    component: LifecycleComponent
  },
  {
    path: '**',
    redirectTo: 'ngif'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
