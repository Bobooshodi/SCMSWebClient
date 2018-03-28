import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInventoryComponent } from './card-inventory.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';

const inventoryRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'manage', component: CardInventoryComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(inventoryRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [CardInventoryComponent]
})
export class CardInventoryModule { }
