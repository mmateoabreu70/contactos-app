import { EventEmitter } from "@angular/core";

import { Contacto } from "./contacto.model";

export class ContactoService {
    selectedContacto = new EventEmitter<Contacto>();

    private contactos: Contacto[] = [
        new Contacto(1, 'Michael David', 'Mateo Abreu', '849-255-9737', 'mmateoabreu70@gmail.com'),
        new Contacto(2, 'Erasmo', 'Mateo Feliz', '829-569-0098', 'mfeliz37@gmail.com')
    ];

    getContactos() {
        return this.contactos.slice();
    }

    onContactoSelected (selectedItem: Contacto) {
        this.selectedContacto.emit(selectedItem);
    }
}