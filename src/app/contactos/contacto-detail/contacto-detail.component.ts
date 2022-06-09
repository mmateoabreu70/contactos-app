import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contacto } from '../contacto.model';
import { ContactoService } from '../contacto.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-contacto-detail',
  templateUrl: './contacto-detail.component.html',
  styleUrls: ['./contacto-detail.component.css']
})
export class ContactoDetailComponent implements OnInit, OnDestroy {
  contacto: Contacto;
  paramSubscription: Subscription;
  id: number;

  genders = ['masculino', 'femenino'];

  constructor(
    private contactoService: ContactoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.params
      .subscribe((param: Params) => {
        this.id = +param['id'];
        this.initDetail();
      });
  }

  initDetail () {
    this.contacto = this.contactoService.getContactoById(this.id);
  }

  onDelete () {
    this.contactoService.deleteContacto(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }
}
