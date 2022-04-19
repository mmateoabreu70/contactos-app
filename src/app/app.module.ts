import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ContactosListComponent } from './contactos/contactos-list/contactos-list.component';
import { ContactoDetailComponent } from './contactos/contacto-detail/contacto-detail.component';

const routes: Routes = [
  { path: 'contactos', component: ContactosComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactosComponent,
    ContactosListComponent,
    ContactoDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
