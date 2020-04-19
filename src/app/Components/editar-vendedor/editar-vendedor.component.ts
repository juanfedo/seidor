import { Component, OnInit,Inject } from '@angular/core';
import { EditarVendedorForm } from '../editar-vendedor/editar-vendedor-form'
import { FormGroup } from '@angular/forms';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog'
import { SeidorUtilService } from '../../Services/seidor-util.service'
import { vendedor} from '../../Models/seidor-models'

@Component({
  selector: 'app-editar-vendedor',
  templateUrl: './editar-vendedor.component.html',
  styleUrls: ['./editar-vendedor.component.css']
})
export class EditarVendedorComponent implements OnInit {

  registroForm:FormGroup;
  Editar:EditarVendedorForm;
  id:number;

  constructor(private service:SeidorUtilService,private dialogRef: MatDialogRef<EditarVendedorComponent>,
    @Inject(MAT_DIALOG_DATA) data:number ) {
    this.Editar = new EditarVendedorForm();
    this.registroForm = this.Editar.getForm();
    this.id = data;
    this.load();
   }

  ngOnInit(): void {
  }

  load(){
    this.service.getVendedorbyID(this.id).subscribe((data:vendedor) => {
      this.registroForm.patchValue({codigo:data.codigo,nombre:data.nombre,apellido:data.apellido,numeroIdentificacion:data.numeroIdentificacion,codigoCiudad:data.codigoCiudad});
    })
  }

  save() {
    if(this.Editar.isValid())
      this.dialogRef.close(this.registroForm.value);
    else
      alert('Por favor valide la información ingresada');
  }

  close() {
    this.dialogRef.close();
  }

}
