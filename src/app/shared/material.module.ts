// TODO: needs to be reviewed once https://github.com/angular/material2/issues/4137 fixed
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatToolbarModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatIconRegistry,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule

} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule
  ],
  exports: [
    CommonModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {
  static forRoot() {
    return {
      ngModule: MaterialModule,
      providers: [
        MatIconRegistry,
      ]
    };
  }
}
import {
  MdcAppBarModule,
  MdcButtonModule,
  MdcCardModule,
  MdcChipsModule,
  MdcCheckboxModule,
  MdcDialogModule,
  MdcDrawerModule,
  MdcElevationModule,
  MdcFabModule,
  MdcFormFieldModule,
  MdcGridListModule,
  MdcIconModule,
  MdcIconToggleModule,
  MdcImageListModule,
  MdcLinearProgressModule,
  MdcListModule,
  MdcMenuModule,
  MdcRadioModule,
  MdcRippleModule,
  MdcSelectModule,
  MdcSliderModule,
  MdcSnackbarModule,
  MdcSwitchModule,
  MdcTextFieldModule,
  MdcThemeModule,
  MdcToolbarModule,
  MdcTypographyModule,
} from '@angular-mdc/web';

@NgModule({
  exports: [
    MdcAppBarModule,
    MdcButtonModule,
    MdcCardModule,
    MdcChipsModule,
    MdcCheckboxModule,
    MdcDialogModule,
    MdcDrawerModule,
    MdcGridListModule,
    MdcElevationModule,
    MdcFabModule,
    MdcFormFieldModule,
    MdcIconModule,
    MdcIconToggleModule,
    MdcImageListModule,
    MdcLinearProgressModule,
    MdcListModule,
    MdcMenuModule,
    MdcRadioModule,
    MdcRippleModule,
    MdcSelectModule,
    MdcSliderModule,
    MdcSnackbarModule,
    MdcSwitchModule,
    MdcTextFieldModule,
    MdcThemeModule,
    MdcToolbarModule,
    MdcTypographyModule,
  ]
})
export class AppMaterialModule { }

