import { Component, OnInit,Inject } from '@angular/core';
import { NuevoCiudadForm } from '../nuevo-ciudad/nuevo-ciudad-form'
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'
import { SeidorUtilService } from '../../Services/seidor-util.service'
import { vendedor,ciudad} from '../../Models/seidor-models'

@Component({
  selector: 'app-nuevo-ciudad',
  templateUrl: './nuevo-ciudad.component.html',
  styleUrls: ['./nuevo-ciudad.component.css']
})
export class NuevoCiudadComponent implements OnInit {

  CrearFormulario:NuevoCiudadForm;
  registroForm:FormGroup;
  invalidForm = false;

  constructor(private service:SeidorUtilService,private dialogRef: MatDialogRef<NuevoCiudadComponent>) { }

  ngOnInit() {
    this.CrearFormulario = new NuevoCiudadForm();
    this.registroForm = this.CrearFormulario.getForm();
  }

  send_data(){
    if(this.CrearFormulario.isValid())
     {
      this.invalidForm = false;
        const temp =<ciudad> {       
          codigo:0,
          descripcion:this.registroForm.value.descripcion   
        }
        this.service.postNewCiudad(temp).subscribe(res => {
          this.dialogRef.close();
        });
     }
     else
      this.invalidForm = true;
  }
}
