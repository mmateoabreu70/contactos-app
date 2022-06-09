import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactoDetailComponent } from "./contactos/contacto-detail/contacto-detail.component";

import { ContactosAddComponent } from "./contactos/contactos-add/contactos-add.component";
import { ContactosStartComponent } from "./contactos/contactos-start/contactos-start.component";
import { ContactosComponent } from "./contactos/contactos.component";
import { LoginGuard } from "./guards/login-guard.service";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contactos', canActivate: [], component: ContactosComponent, children: [
        { path: '', component: ContactosStartComponent },
        { path: 'add', component: ContactosAddComponent },
        { path: ':id', component: ContactoDetailComponent, pathMatch: 'full' },
        { path: ':id/edit', component: ContactosAddComponent },
        { path: ':id/delete', redirectTo: 'contactos' }
    ] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}