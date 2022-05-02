import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactoDetailComponent } from "./contactos/contacto-detail/contacto-detail.component";

import { ContactosAddComponent } from "./contactos/contactos-add/contactos-add.component";
import { ContactosListComponent } from "./contactos/contactos-list/contactos-list.component";
import { ContactosComponent } from "./contactos/contactos.component";
import { LoginGuard } from "./guards/login-guard.service";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contactos', canActivate: [], component: ContactosComponent, children: [] },
    { path: 'contactos/:id/edit', canActivate: [], component: ContactosAddComponent },
    { path: 'contactos/add', canActivate: [], component: ContactosAddComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}