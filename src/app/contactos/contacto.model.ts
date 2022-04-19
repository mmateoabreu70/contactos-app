export class Contacto {
    public id: number;
    public nombres: string;
    public apellidos: string;
    public telefono: string;
    public email: string;

    constructor (id: number, nombres: string, apellidos: string, telefono: string, email: string) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.email = email;
    }
}