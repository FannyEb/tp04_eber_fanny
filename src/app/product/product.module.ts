import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryPipe } from '../core/pipe/product-category/product-category.pipe';
import { ChipActivateDirective } from '../core/directive/chip-activate/chip-activate.directive';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductInfoComponent } from './product-info/product-info.component';

const routes: Routes = [
  {path: '', component: CatalogueComponent},
  {path: ':id', component: ProductInfoComponent},
];

@NgModule({
  declarations: [
    CatalogueComponent,
    ProductCategoryPipe,
    ChipActivateDirective,
    ProductInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    AngularMaterialModule
  ]
})
export class ProductModule { }
