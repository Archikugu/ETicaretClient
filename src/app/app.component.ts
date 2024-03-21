import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
// declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ETicaretClient';

  constructor(private toastrService: CustomToastrService) {
    toastrService.message("Merhaba", "Gokhan", {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.TopRight,
    });

    // toastrService.message("Merhaba", "Gokhan",ToastrMessageType.Warning,ToastrPosition.TopLeft);

  }

}
// $(document).ready(() => {
//   alert("Test")
// })