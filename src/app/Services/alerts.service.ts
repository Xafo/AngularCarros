import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})

export class AlertsService {
Mensaje: string;
constructor(private dialog: MatDialog) { }

openDialog(): void{
  const dialogRef = this.dialog.open(AlertsService, {
    width:'250px',
    data: {
      Mensaje: this.Mensaje
    }
  });
}


}
