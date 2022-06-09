import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-archivo',
  templateUrl: './item-archivo.component.html',
  styleUrls: ['./item-archivo.component.css']
})
export class ItemArchivoComponent implements OnInit {

  @Input()
  itemInfo:any;

  @Output()
  cambioArchivo:EventEmitter<number> = new EventEmitter();

  edicionActiva!: Boolean;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  borrar(ruta: string, nombre: string):void{
    console.log('hola');
    const detalles ={
      'ruta-archivo' : ruta+ "/" + nombre

    }
    console.log(detalles);
    this.http.get('http://localhost/servicios/borrar_archivos.php',{params:detalles}).subscribe(()=>{
      this.cambioArchivo.emit()
    })
  }
  activarEdicion():void{
    this.edicionActiva = true;
  }
  desactivarEdicion():void{
    this.edicionActiva = false;
  }

}
