import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorAnimationComponent } from './typed-form/error-animation/error-animation.component';
import { ErrorMessageComponent } from './typed-form/error-message/error-message.component';
import { NonNullableComponent } from './typed-form/non-nullable/non-nullable.component';
import { RegexComponent } from './typed-form/regex/regex.component';
import { SelectComponent } from './typed-form/select/select.component';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { ValidatorsComponent } from './typed-form/validators/validators.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'typedForm', component: TypedFormComponent, data: {'form': 'typedForm'} },
  { path: 'typedForm/nonNullable', component: NonNullableComponent, data: {'form': 'typedFormNonNullable'} },
  { path: 'typedForm/validators', component: ValidatorsComponent, data: {'form': 'typedFormValidators'} },
  { path: 'typedForm/regex', component: RegexComponent },
  { path: 'typedForm/errorMessage', component: ErrorMessageComponent },
  { path: 'typedForm/errorAnimation', component: ErrorAnimationComponent },
  { path: 'typedForm/select', component: SelectComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
