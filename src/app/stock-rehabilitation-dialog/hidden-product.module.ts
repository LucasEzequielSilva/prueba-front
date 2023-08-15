import {Component, } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogAnimationsExampleDialog } from './stock-rehabilitation-dialog.component';
import { CommonModule } from '@angular/common';
/* POPUP FINAL */
@Component({
  selector: 'hidden-product',
  templateUrl: './hidden-product.module.html', // Ajusta la ruta al archivo de la plantilla
  styleUrls: ['./dialog-animations-example.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, DialogAnimationsExampleDialog, CommonModule],
})
export class HiddenDialog {
  constructor(
    public dialog: MatDialog, 
    ) {}
    
}