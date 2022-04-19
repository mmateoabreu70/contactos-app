import { Component, OnInit } from '@angular/core';
import { ContactoService } from './contacto.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
  providers: [ContactoService]
})
export class ContactosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
