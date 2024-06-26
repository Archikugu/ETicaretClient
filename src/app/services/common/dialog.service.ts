import { Injectable } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { ComponentType } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(dialogParameters: Partial<DialogParameters>): void {
    const dialogRef = this.dialog.open(dialogParameters.componentType, {
      data: dialogParameters.data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result == dialogParameters.data) {
        dialogParameters.afterClosed();
      }
    });
  }
}

export class DialogParameters {
  componentType: ComponentType<any>;
  data: any;
  afterClosed: () => void;
  options?: Partial<DialogOptions> = new DialogOptions();
}

export class DialogOptions {
  width?: string = "250px";
  height?: string;
  position?: DialogPosition;
}