import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroExtension'
})
export class FiltroExtensionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    let iconoClase: string;

    switch(value){
      case 'zip':
        iconoClase = "fa-solid fa-file-zipper";
        break;
      case 'apk':
        iconoClase = "fa-brands fa-android";
        break;
      case 'pdf':
        iconoClase = "fa-solid fa-file-pdf";
        break;
      default:
        iconoClase = "fa-solid fa-file";
        break;
    }
    return iconoClase;
  }

}
