import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductoFormComponent } from './producto-form/producto-form/producto-form.component';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ProductoMainComponent } from './producto-main/producto-main.component';



@NgModule({
  declarations: [
    ProductoFormComponent,
    ProductoDetailComponent,
    ProductoMainComponent
  ],

  exports:[    ProductoFormComponent,
    ProductoDetailComponent,
    ProductoMainComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ProductoModule { }
