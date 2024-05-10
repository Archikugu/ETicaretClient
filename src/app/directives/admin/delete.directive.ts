import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, input } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { ProductService } from '../../services/common/models/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { data } from 'jquery';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { SpinnerType } from '../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';


declare var $: any

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService: HttpClientService,
    public dialog: MatDialog,
    private alertifyService: AlertifyService,
    private spinner: NgxSpinnerService
  ) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/delete.png");
    img.setAttribute("style", "cursor: pointer;");
    _renderer.appendChild(element.nativeElement, img);
  }

  @Input() id: string;
  @Input() controller: string;

  @Output() callback: EventEmitter<any> = new EventEmitter();

  @HostListener("click")
  async onClick() {
    this.openDialog(async () => {
      const td: HTMLTableCellElement = this.element.nativeElement;
      this.httpClientService.delete({
        controller: this.controller
      }, this.id).subscribe(data => {
        $(td.parentElement).animate({
          opacity: 0,
          left: "+=50",
          height: "toogle"
        }, 700, () => {
          this.callback.emit();
          this.alertifyService.message("Ürün Başarıyla Silinmiştir", {
            dismissOthers: false,
            messageType: MessageType.Success,
            position: Position.TopRight
          })
        });
      }, (errorResponse: HttpErrorResponse) => {
        this.spinner.hide(SpinnerType.BallAtom)
        this.alertifyService.message("Ürün Silinirken Hata İle Karşılaşıldı", {
          dismissOthers: false,
          messageType: MessageType.Error,
          position: Position.TopRight
        });
      });
    });

  }


  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result == DeleteState.Yes) {
        afterClosed();
      }

    });
  }
}
