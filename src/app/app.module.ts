import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaDeArchivosComponent } from './lista-de-archivos/lista-de-archivos.component';
import { ItemArchivoComponent } from './item-archivo/item-archivo.component';
import { FiltroExtensionPipe } from './filtro-extension.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeArchivosComponent,
    ItemArchivoComponent,
    FiltroExtensionPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
