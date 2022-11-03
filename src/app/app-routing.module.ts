import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
    { path: '', component: FormComponent },
    { path: 'client-form', component: FormComponent },
    { path: 'client-info/:id', component: ClientInfoComponent },
    {path: 'catalogue', component: CatalogueComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }