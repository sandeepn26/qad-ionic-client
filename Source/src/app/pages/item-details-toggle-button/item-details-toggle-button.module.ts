import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../components/shared.module';

import { ItemDetailsToggleButtonPage } from './item-details-toggle-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemDetailsToggleButtonPage
      }
    ])
  ],
  declarations: [ItemDetailsToggleButtonPage],
  exports:[ItemDetailsToggleButtonPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsToggleButtonPageModule {}
