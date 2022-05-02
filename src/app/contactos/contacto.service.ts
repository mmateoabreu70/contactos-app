import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

import { Contacto } from "./contacto.model";

export class ContactoService {
    selectedContacto = new Subject<Contacto>();
    contactosChanged = new Subject<Contacto[]>();

    private contactos: Contacto[] = [
        new Contacto(1, 'Michael David', 'Mateo Abreu', '849-255-9737', 'mmateoabreu70@gmail.com', 0, 
                    ['Practicar ingles', 'Jugar basketball'], '1.jpg'),
        new Contacto(2, 'Erasmo', 'Mateo Feliz', '829-569-0098', 'mfeliz37@gmail.com', 0, 
                    ['Estudiar la biblia', 'Aprender electricidad'])
    ];

    id = this.contactos[this.contactos.length - 1].id;

    getContactos() {
        return this.contactos.slice();
    }

    getContactoById(id: number) {
        return this.contactos.find(c => c.id === id);
    }

    onContactoSelected (selectedItem: Contacto) {
        this.selectedContacto.next(selectedItem);
    }

    addContacto (contacto: Contacto) {
        contacto.id = this.id = this.id + 1;
        this.contactos.push(contacto);
        this.contactosChanged.next(this.contactos);

        console.log(this.contactos);
    }

    updateContacto (contactoToUpdate) {
        let contactoFound = this.contactos.find(c => c.id === contactoToUpdate.id);
        let index = this.contactos.indexOf(contactoFound);
        this.contactos[index] = contactoToUpdate;
    }

    // findIndexToUpdate(newItem) { 
    //     return newItem.id === this;
    // }
}