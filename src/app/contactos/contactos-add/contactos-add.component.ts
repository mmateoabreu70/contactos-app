import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, NgForm, RadioControlValueAccessor, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contacto } from '../contacto.model';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-contactos-add',
  templateUrl: './contactos-add.component.html',
  styleUrls: ['./contactos-add.component.css']
})
export class ContactosAddComponent implements OnInit {
  contactoAddForm: FormGroup;

  genders = ['Masculino', 'Femenino'];
  forbiddenSymbols: String[] = ['/', '*', '@'];
  id: number;
  editMode = false;
  formValid = false;


  constructor(
    private contactoService: ContactoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (param: Params) => {
          this.id = +param['id'];
          this.editMode = param['id'] != null;
          this.initForm();
        }
      );

    this.contactoAddForm.statusChanges.subscribe(
      (status) => {
        if (status == 'VALID') {
          this.formValid = true;
          return;
        }

        this.formValid = false;
      }
    );
  }

  private initForm() {
    let id = 0;
    let nombres = '';
    let apellidos = '';
    let telefono = '';
    let email = '';
    let genero = 0;
    let hobbies = new FormArray([
      new FormControl(null, Validators.required)
    ]);

    if (this.editMode) {
      const contact = this.contactoService.getContactoById(this.id);

      id = contact.id;
      nombres = contact.nombres;
      apellidos = contact.apellidos;
      telefono = contact.telefono;
      email = contact.email;
      genero = contact.genero;
      
      if (contact['hobbies']) {
        hobbies = new FormArray([]);

        for (let hobby of contact.hobbies) {
          hobbies.push(new FormControl(hobby, Validators.required));
        }
      }
    }

    this.contactoAddForm = new FormGroup({
      'id': new FormControl(id),
      'fullName': new FormGroup({
        'nombres': new FormControl(nombres, [Validators.required, this.forbiddenCharacters.bind(this)]),
        'apellidos': new FormControl(apellidos, this.forbiddenCharacters.bind(this))
      }),
      'telefono': new FormControl(telefono, Validators.required),
      'email': new FormControl(email, [Validators.required, Validators.email], this.forbiddenEmails),
      'genero': new FormControl(genero),
      'hobbies': hobbies
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.contactoAddForm.get('hobbies') as FormArray).push(control);
  }

  get hobbyControls() {
    return (this.contactoAddForm.get('hobbies') as FormArray).controls;
  }

  onDeleteHobby(idx: number) {
    (this.contactoAddForm.get('hobbies') as FormArray).controls.splice(idx, 1);
  }

  forbiddenCharacters(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenSymbols.indexOf(control.value) !== -1) {
      return {'forbiddenChar': true}
    }

    return null;
  }

  forbiddenEmails (control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'test@test.com') {
          return resolve({'emailIsForbidden': true});
        } else {
          return resolve(null);
        }
      },1500);
    });

    return promise;
  }

  onSubmit() {
    const value = this.contactoAddForm.value;

    const contact = new Contacto(
      +value['id'],
      value['fullName'].nombres,
      value['fullName'].apellidos,
      value['telefono'],
      value['email'],
      value['genero'],
      value['hobbies']      
    );

    console.log(contact);

    if (this.editMode) {
      this.contactoService.updateContacto(contact);
    } else {
      this.contactoService.addContacto(contact);
    }

    this.router.navigate(['contactos']);
  }

}
