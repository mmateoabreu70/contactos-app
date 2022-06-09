import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { 
  FontAwesomeModule, 
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faPenToSquare,
  faTrashCan,
  faCirclePlus,
  faGear
} from '@fortawesome/free-solid-svg-icons'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ContactosListComponent } from './contactos/contactos-list/contactos-list.component';
import { ContactoListItemComponent } from './contactos/contactos-list/contacto-list-item/contacto-list-item.component';
import { ContactosAddComponent } from './contactos/contactos-add/contactos-add.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactoDetailComponent } from './contactos/contacto-detail/contacto-detail.component';
import { LoginGuard } from './guards/login-guard.service';
import { DropdownDirective } from './directives/dropdown.directive';
import { LinkDirective } from './directives/link.directive';
import { ContactosStartComponent } from './contactos/contactos-start/contactos-start.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactosComponent,
    ContactosListComponent,
    ContactoDetailComponent,
    ContactoListItemComponent,
    ContactosAddComponent,
    DropdownDirective,
    LinkDirective,
    ContactosStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faPenToSquare,
      faTrashCan,
      faCirclePlus,
      faGear
    )
  }

}
