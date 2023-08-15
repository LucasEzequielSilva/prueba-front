import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogAnimationsConfirmation } from './confirmation.module';
import { DialogAnimationsExampleDialog } from './stock-rehabilitation-dialog.component';
/**
 * @title Dialog Animations
 */
/* POPUP DE BOTONES */
@Component({
    selector: 'dialog-animations-example',
    templateUrl: './dialog-animations-example.html',
    standalone: true,
    imports: [MatButtonModule, MatDialogModule, DialogAnimationsConfirmation],
  })
  export class DialogAnimationsExample {
    constructor(public dialog: MatDialog) {}
    openDialog(): void {
      this.dialog.open(DialogAnimationsExampleDialog, {
        width: '250px',
        panelClass: 'custom-modalbox'
      });
    }
  }
  /** 
  *@title Dialog Animations Example 
  */