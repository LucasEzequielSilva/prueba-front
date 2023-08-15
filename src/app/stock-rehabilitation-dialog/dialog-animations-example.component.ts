import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogAnimationsConfirmation } from './confirmation.module';
import { DialogAnimationsExampleDialog } from './stock-rehabilitation-dialog.component';
import { CommonModule } from '@angular/common';
import { HiddenDialog } from './hidden-product.module';
/**
 * @title Dialog Animations
 */
/* POPUP DE BOTONES */
@Component({
    selector: 'dialog-animations-example',
    templateUrl: './dialog-animations-example.html',
    standalone: true,
    imports: [MatButtonModule, MatDialogModule, DialogAnimationsConfirmation, CommonModule, HiddenDialog],
  })
  export class DialogAnimationsExample {
    constructor(public dialog: MatDialog) {}
    openDialog(): void {
      this.dialog.open(DialogAnimationsExampleDialog, {
        width: '250px',
        panelClass: 'custom-modalbox'
      });
    }
    openDialogHidden(): void {
      this.dialog.open(HiddenDialog, {
        width: '250px',
      });
    }
  }
  /** 
  *@title Dialog Animations Example 
  */