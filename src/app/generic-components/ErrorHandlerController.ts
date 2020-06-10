import { ErrorHandler } from "@angular/core";
import { NgModule } from "@angular/core";
import { TextAst } from '@angular/compiler';
import { text } from '@angular/core/src/render3';

@NgModule({
    providers: [{
                provide: ErrorHandler,
                useClass: ErrorHandlerController
                }]
})

export class ErrorHandlerController implements ErrorHandler {

texts = new Map([
    [406, "El email no es valido / Email invalid"],
    [412, "El email ya existe, por favor usar uno nuevo / The email already exists, please use a new one"],
    [400, "Campos incompletos en el formulario / Incomplete fields in the form"],
    [409, "El usuario ya existe, por favor crear uno nuevo / The user already exists, please create a new one"],
  ])

handleError(res:Response){
     if(this.texts.has(res.status)){
        return this.texts.get(res.status);
     }
 }
}

export class MyErrorModule {}