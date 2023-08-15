import {Component, Input, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogAnimationsExampleDialog } from './stock-rehabilitation-dialog.component';
/* POPUP FINAL */
@Component({
  selector: 'dialog-animations-confirmation',
  templateUrl: './dialog-animations-confirmation.html', // Ajusta la ruta al archivo de la plantilla
  styleUrls: ['./dialog-animations-example.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, DialogAnimationsExampleDialog],
})
export class DialogAnimationsConfirmation {
  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, 
    public dialog: MatDialog, 
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
    
}