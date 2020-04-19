import { Component, OnInit } from '@angular/core';
import { SeidorUtilService } from '../../Services/seidor-util.service'
import { vendedor, ciudad} from '../../Models/seidor-models'
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { EditarVendedorComponent} from "../editar-vendedor/editar-vendedor.component";
import { NuevoVendedorComponent} from "../nuevo-vendedor/nuevo-vendedor.component";
import { NuevoCiudadComponent} from "../nuevo-ciudad/nuevo-ciudad.component";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public elementos:vendedor[];
  
  constructor(private service: SeidorUtilService,private dialog: MatDialog) { 
    this.fillGrid();
  }

  ngOnInit() {
  }

  fillGrid(){
    this.service.getVendedor().subscribe((res:vendedor[]) => 
    {
      for(let v of res)
          this.service.getCiudad(v.codigoCiudad).subscribe((r:ciudad) => {
            v.ciudad = r.descripcion;
          }
        );
      this.elementos = res;
    })
  }

  delete_line(id:number,codigo:number){
    if (confirm("Esta seguro que desea borrar este registro?")) {
      this.service.delDelete(codigo).subscribe((res:vendedor[]) => 
      {      
        this.elementos.splice(id,1);
      }) 
    }    
  }

  save_data_ciudad_modal(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    
    const dialogRef = this.dialog.open(NuevoCiudadComponent,dialogConfig);
    
    dialogRef.afterClosed().subscribe((res:ciudad) => {       
         //this.fillGrid();
         //alert('Ciudad creada con exito');
      }
   ),(error) => {     
     alert(error);     
   }
  }

  save_data_modal(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    
    const dialogRef = this.dialog.open(NuevoVendedorComponent,dialogConfig);
    
    dialogRef.afterClosed().subscribe((res:vendedor) => {       
         this.fillGrid();
      }
   ),(error) => {     
     alert(error);     
   }
  }

  open_modal(codigo:number){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = codigo;  
    
    const dialogRef = this.dialog.open(EditarVendedorComponent,dialogConfig);
    
    dialogRef.afterClosed().subscribe((res:vendedor) => {
      res.codigoCiudad = Number(res.codigoCiudad);
       this.service.putUpdate(codigo,res).subscribe( res=>{
         this.fillGrid();
       }
       );
      },error => 
        alert(error)    
      
   );
  }
}
