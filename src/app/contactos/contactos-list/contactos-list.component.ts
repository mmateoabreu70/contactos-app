import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto.model';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-contactos-list',
  templateUrl: './contactos-list.component.html',
  styleUrls: ['./contactos-list.component.css']
})
export class ContactosListComponent implements OnInit {
  selectedItem: Contacto;
  contactos: Contacto[] = [];

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.contactos = this.contactoService.getContactos();
  }

  onContactoSelected(contacto: Contacto) {
    this.selectedItem = contacto;
    this.contactoService.onContactoSelected(contacto);
  }

}
