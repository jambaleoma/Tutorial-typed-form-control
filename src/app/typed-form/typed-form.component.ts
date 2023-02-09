import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typed-form',
  template: `
  <div class="d-grid gap-3">
    <div class="p-2 bg-light border" style="display: flex; justify-content: center;">
      <button type="button" class="btn btn-primary p-2 m-2" (click)="goTo('typedForm/nonNullable')">NonNullable</button>
    </div>
    <div class="p-2 bg-light border" style="display: flex; justify-content: center;">
      <button type="button" class="btn btn-primary p-2" (click)="goTo('typedForm/validators')">Validators</button>
    </div>
    <div class="p-2 bg-light border" style="display: flex; justify-content: center;">
      <button type="button" class="btn btn-primary p-2" (click)="goTo('typedForm/regex')">Regex</button>
    </div>
    <div class="p-2 bg-light border" style="display: flex; justify-content: center;">
      <button type="button" class="btn btn-primary p-2" (click)="goTo('typedForm/errorMessage')">Error Message</button>
    </div>
    <div class="p-2 bg-light border" style="display: flex; justify-content: center;">
      <button type="button" class="btn btn-primary p-2" (click)="goTo('typedForm/errorAnimation')">Error Animation</button>
    </div>
    <div class="p-2 bg-light border" style="display: flex; justify-content: center;">
      <button type="button" class="btn btn-primary p-2" (click)="goTo('typedForm/select')">Select</button>
    </div>
  </div>
  
  <!-- FOOTER -->
  <footer class="text-center text-lg-start fixed-bottom">
    <div class="text-center p-3">
      <button type="button" class="btn btn-primary p-2" (click)="goTo('home')">Home</button>
    </div>
  </footer>
  `,
  styles: [
  ]
})
export class TypedFormComponent {

  constructor(
    private router: Router
  ) { }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }

}
