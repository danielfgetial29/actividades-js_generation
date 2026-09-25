import { Animal } from "./animal.js";

export class Perro extends Animal{
    
    ladrar(){
        return `${this.nombre} hace WOOF!`
    }

}