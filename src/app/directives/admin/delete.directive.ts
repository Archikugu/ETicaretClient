import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SpinnerType } from '../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;

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
    this._renderer.setAttribute(img, "src", "../../../../../assets/delete.png");
    this._renderer.setAttribute(img, "style", "cursor: pointer;");
    this._renderer.appendChild(this.element.nativeElement, img);
  }

  @Input() id: string;
  @Input() controller: string;

  @Output() callback: EventEmitter<any> = new EventEmitter();

  @HostListener("click")
  async onClick() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: DeleteState.Yes
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === DeleteState.Yes) {
        const td: HTMLTableCellElement = this.element.nativeElement;
        this.httpClientService.delete({
          controller: this.controller
        }, this.id).subscribe(data => {
          $(td.parentElement).animate({
            opacity: 0,
            left: "+=50",
            height: "toggle"
          }, 700, () => {
            this.callback.emit();
            this.alertifyService.message("Ürün Başarıyla Silinmiştir", {
              dismissOthers: false,
              messageType: MessageType.Success,
              position: Position.TopRight
            });
          });
        }, (errorResponse: HttpErrorResponse) => {
          this.spinner.hide(SpinnerType.BallAtom);
          this.alertifyService.message("Ürün Silinirken Hata İle Karşılaşıldı", {
            dismissOthers: false,
            messageType: MessageType.Error,
            position: Position.TopRight
          });
        });
      }
    })
  }
}
