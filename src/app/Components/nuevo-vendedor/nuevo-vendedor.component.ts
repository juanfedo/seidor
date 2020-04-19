import { Component, OnInit,Inject } from '@angular/core';
import { EditarVendedorForm } from '../editar-vendedor/editar-vendedor-form'
import { FormGroup } from '@angular/forms';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog'
import { SeidorUtilService } from '../../Services/seidor-util.service'
import { vendedor,ciudad} from '../../Models/seidor-models'

@Component({
  selector: 'app-nuevo-vendedor',
  templateUrl: './nuevo-vendedor.component.html',
  styleUrls: ['./nuevo-vendedor.component.css']
})
export class NuevoVendedorComponent implements OnInit {

  CrearFormulario:EditarVendedorForm;
  registroForm:FormGroup;
  invalidForm = false;
  public ciudades:ciudad[];

  constructor(private service:SeidorUtilService,private dialogRef: MatDialogRef<NuevoVendedorComponent>) { }

  ngOnInit() {
    this.CrearFormulario = new EditarVendedorForm();
    this.registroForm = this.CrearFormulario.getForm();
    this.fill_cities();
  }

  fill_cities(){
    this.service.getCiudades().subscribe((res:ciudad[]) => {
      this.ciudades = res;
    }
    );
  }

  send_data(){
    if(this.CrearFormulario.isValid())
     {
      this.invalidForm = false;
        const temp =<vendedor> {       
          codigo:0,   
          nombre:this.registroForm.value.nombre,
          apellido:this.registroForm.value.apellido,
          numeroIdentificacion:this.registroForm.value.numeroIdentificacion,
          codigoCiudad:Number(this.registroForm.value.codigoCiudad)
        }
        this.service.postNew(temp).subscribe(res => {
          this.dialogRef.close();
        });
     }
     else
      this.invalidForm = true;
  }

}
