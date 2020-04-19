import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { EditarVendedorComponent } from './Components/editar-vendedor/editar-vendedor.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NuevoVendedorComponent } from './Components/nuevo-vendedor/nuevo-vendedor.component';
import { NuevoCiudadComponent } from './Components/nuevo-ciudad/nuevo-ciudad.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EditarVendedorComponent,
    NuevoVendedorComponent,
    NuevoCiudadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditarVendedorComponent]
})
export class AppModule { }
