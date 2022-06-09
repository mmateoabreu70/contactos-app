import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contacto } from '../contacto.model';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-contactos-list',
  templateUrl: './contactos-list.component.html',
  styleUrls: ['./contactos-list.component.css']
})
export class ContactosListComponent implements OnInit, OnDestroy {
  contactos: Contacto[] = [];
  subscription: Subscription;

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.subscription = this.contactoService.contactosChanged.subscribe(
      (contactos: Contacto[]) => {
        this.contactos = contactos;
      }
    );

    this.contactos = this.contactoService.getContactos();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
