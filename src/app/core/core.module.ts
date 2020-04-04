import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AppMaterialModule } from '../app-material.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GuardGuard } from './guard/guard.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PageNotFoundComponent, 
    SignInComponent, 
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AppMaterialModule
  ]
})
export class CoreModule { }
