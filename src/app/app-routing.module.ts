import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customers/customer.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [    { path: "", component: CustomerComponent },
{path:'edit/:id',component:CustomerComponent},

  { path: 'edit', component: EditComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'customer', component: CustomerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
