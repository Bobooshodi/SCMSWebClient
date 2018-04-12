import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInventoryComponent } from './card-inventory.component';
import { AuthGuard } from '../../../Shared/auth/auth.guard';
import { CardService } from '../../../Services/card.service';
import { CardPipesModule } from '../../../Shared/pipes/card-pipes/card-pipes.module';
import { AppModalModule } from '../../../Shared/modal/modal.module';
import { CardTypeService } from '../../../Services/card-type.service';

const inventoryRoutes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full'}, // , canActivate: [AuthGuard] },
  { path: 'manage', component: CardInventoryComponent} // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppModalModule,
    CardPipesModule,
    RouterModule.forChild(inventoryRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [CardInventoryComponent],
  providers: [
    CardService,
    CardTypeService
  ]
})
export class CardInventoryModule { }
