import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() urlImage:string = "";

  imageDefault = "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_640.png";


  imageError() {
    this.urlImage = this.imageDefault;
  }
}
