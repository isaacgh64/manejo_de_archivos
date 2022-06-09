import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-archivos',
  templateUrl: './lista-de-archivos.component.html',
  styleUrls: ['./lista-de-archivos.component.css']
})
export class ListaDeArchivosComponent implements OnInit {

  archivos: any[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.peticionExternal()
  }

  peticionExternal():void{
    this.http.get<Array<object>>('http://localhost/servicios/leer_archivos.php').subscribe((respuesta:Array<object>) => {
      this.archivos = respuesta;
    })
  }

  refrescar(){
    this.peticionExternal();
  }

}
