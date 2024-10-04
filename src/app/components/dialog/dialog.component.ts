import { Component, Inject } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';


export interface DialogData {
  title: string;
  message: string;
}
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, NgIf],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    //console.log(data);
  }
}




