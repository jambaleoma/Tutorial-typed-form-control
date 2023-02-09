import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { ValidatorsComponent } from './typed-form/validators/validators.component';
import { NonNullableComponent } from './typed-form/non-nullable/non-nullable.component';
import { RegexComponent } from './typed-form/regex/regex.component';
import { ErrorMessageComponent } from './typed-form/error-message/error-message.component';
import { ErrorAnimationComponent } from './typed-form/error-animation/error-animation.component';
import { ErrorBarComponent } from './typed-form/error-animation/error-bar.component';
import { GenericErrorComponent } from './typed-form/error-animation/generic-error.component';
import { GetPercPipe } from './typed-form/error-animation/get-perc.pipe';
import { SelectComponent } from './typed-form/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypedFormComponent,
    ValidatorsComponent,
    NonNullableComponent,
    RegexComponent,
    ErrorMessageComponent,
    ErrorAnimationComponent,
    ErrorBarComponent,
    GenericErrorComponent,
    GetPercPipe,
    SelectComponent
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
