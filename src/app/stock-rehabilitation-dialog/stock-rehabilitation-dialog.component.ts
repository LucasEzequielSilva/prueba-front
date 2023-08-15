import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogAnimationsConfirmation } from './confirmation.module';
import { CommonModule } from '@angular/common';
import { HiddenDialog } from './hidden-product.module';
/** 
*@title Dialog Animations Example 
*/
/* POPUP DE HORAS */
@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
  styleUrls: ['./dialog-animations-example.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, DialogAnimationsConfirmation, CommonModule, HiddenDialog],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, public dialog: MatDialog) {}
  options:Array<string> = ["2","4","8","16","24", "NO REHABILITAR"]
  
  hours:string | null = null;
  openDialog(): void {
    this.dialog.open(DialogAnimationsConfirmation, {
      width: '250px',
      data: {
        hours: this.hours
      },
      panelClass: 'custom-modalbox'
    });
  }

  selectRehabilitationTime(rehabilitationTime: string): void {
    this.dialogRef.close(rehabilitationTime);
    this.hours = rehabilitationTime
    this.openDialog()
  }}
  
