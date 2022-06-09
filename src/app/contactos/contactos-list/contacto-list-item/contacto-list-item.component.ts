import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from '../../contacto.model';
import { ContactoService } from '../../contacto.service';

@Component({
  selector: 'app-contacto-list-item',
  templateUrl: './contacto-list-item.component.html',
  styleUrls: ['./contacto-list-item.component.css']
})
export class ContactoListItemComponent implements OnInit {
  selectedItem: Contacto;
  @Input() contactos: Contacto[];

  constructor(
    private contactoService: ContactoService
  ) { }

  ngOnInit(): void {
  }

  onContactoSelected(contacto: Contacto) {
    this.selectedItem = contacto;
    this.contactoService.onContactoSelected(contacto);
  }

  onDelete(id: number) {
    this.contactoService.deleteContacto(id);
    // this.router.navigate(['/contactos'], {relativeTo: this.activatedRoute})
  }
}
