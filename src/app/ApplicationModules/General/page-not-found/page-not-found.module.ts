import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
