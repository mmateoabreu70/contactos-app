import { Genero } from "src/assets/enums/generos.enum";

export class Contacto {
    public id: number;
    public nombres: string;
    public apellidos: string;
    public telefono: string;
    public email: string;
    public genero: Genero;
    public hobbies: string[];
    public imgPath: string;

    constructor (
        id: number, 
        nombres: string, 
        apellidos: string, 
        telefono: string, 
        email: string,
        genero: Genero,
        hobbies: string[], 
        imgPath: string = ''
    ) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.email = email;
        this.genero = genero;
        this.hobbies = hobbies;
        this.imgPath = imgPath;
    }
}