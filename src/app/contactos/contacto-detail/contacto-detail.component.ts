import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto.model';
import { ContactoService } from '../contacto.service';
import { Genero } from 'src/assets/enums/generos.enum';

@Component({
  selector: 'app-contacto-detail',
  templateUrl: './contacto-detail.component.html',
  styleUrls: ['./contacto-detail.component.css']
})
export class ContactoDetailComponent implements OnInit {
  contacto: Contacto;
  genders = ['masculino', 'femenino'];

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.contactoService.selectedContacto
      .subscribe((selectedContacto: Contacto) => {
        this.contacto = selectedContacto;
      });
  }

}
