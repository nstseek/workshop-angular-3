import { Injectable } from '@angular/core';
import { Observable, pipe, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RxServService {
  observable1 = of(1).pipe(delay(1000));
  observable2 = of(2).pipe(delay(3000));
  observable3 = of(3).pipe(delay(5000));
}
