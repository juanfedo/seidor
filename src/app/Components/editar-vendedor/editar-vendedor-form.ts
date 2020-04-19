import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class EditarVendedorForm {
    public form: FormGroup;
    private formBuilder: any;

    constructor() {
        this.formBuilder = new FormBuilder();
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            codigo:[''],
            nombre:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
            apellido: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
            numeroIdentificacion: ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
            codigoCiudad: [''],
            ciudad: ['']
        });
    }

    getForm(): FormGroup {
        return this.form;
    }

    getFormValues() {
        return this.form.value;
    }

    isValid() {
        return this.form.valid;
    }

}