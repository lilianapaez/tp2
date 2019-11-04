import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { environment } from 'src/environments/environment';
import { AppLoaderService } from 'src/app/shared/services/app-loader/app-loader.service';
import { ActivatedRoute } from '@angular/router';
import { LandingService } from 'src/app/shared/services/ofViews/landing.service';
import { Landing } from 'src/app/shared/models/landing';
import { SessionService } from 'src/app/shared/services/session.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-generic-landing',
  templateUrl: './generic-landing.html',
  styleUrls: ['./generic-landing.scss']
})
export class GenericLandingComponent implements OnInit {
  public contactForm: FormGroup;
  public valida: boolean;
  public userName: string;
  public picture: string;
  public loading: boolean;
  public loading2: boolean;
  public landing: Landing;
  public url: string;
  public provincias: any;
  public localidades: any;
  public sexo: any;
  public renaper_apellido: any;
  public renaper_nombre: any;


  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private loader: AppLoaderService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private landingService: LandingService
  ) {
    this.contactForm = null;
    this.valida = null;
    this.loading = false;
    this.loading2 = false;
    this.url = environment.url;
  }

  ngOnInit() {
    /*Valida que los campos sean obligatorios y tengan el formato correcto*/
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      sexo: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      nTarjetaClub: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      provincia: ['', Validators.required],
      localidad: ['', Validators.required],
    });

    this.renaper_apellido = "";
    this.renaper_nombre = "";


    this.landingService.getProvincias().subscribe(
      result => this.provincias = result.provincias,
      error => console.error(error)
    );
  }



  

  validateCard() {
    this.loading = true;
    this.landingService
      .validateClubService({
        cardNumber: this.contactForm.value.nTarjetaClub,
        dni: this.contactForm.value.numeroDocumento
      })
      .subscribe(
        result => {
          this.valida = result.estado;
          this.loading = false;
        },
        error => {
          console.log(error);
          this.loading = false;
        }
      );
  }

  validarRenaper() {
    this.loading2 = true;
    this.landingService
      .validarRenaper({
        dni: this.contactForm.value.numeroDocumento,
        sexo:this.contactForm.value.sexo
      })
      .subscribe(
        result => {
          console.log(result.Record.apellido);
          this.renaper_apellido = result.Record.apellido;
          this.renaper_nombre = result.Record.nombres;
          this.loading2 = false;
        },
        error => {
          console.log(error);
          this.loading2 = false;

        }
      );
  }

  buscaLocalidades() {
    this.landingService.getLocalidades(this.contactForm.value.provincia).subscribe(
      result => this.localidades = result.localidades,
      error => console.error(error)
    );
  }
}
