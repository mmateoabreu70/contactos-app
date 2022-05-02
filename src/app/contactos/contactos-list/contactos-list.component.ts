import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto.model';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-contactos-list',
  templateUrl: './contactos-list.component.html',
  styleUrls: ['./contactos-list.component.css']
})
export class ContactosListComponent implements OnInit {
  contactos: Contacto[] = [];

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.contactoService.contactosChanged.subscribe(
      (contactos: Contacto[]) => {
        this.contactos = contactos;
      }
    );

    this.contactos = this.contactoService.getContactos();
    console.log(this.contactos);
  }

}
