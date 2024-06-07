import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    console.log()
  }

  onImageClick(): void {
    console.log("testestest");

    this.newItemEvent.emit(this.imageUrl);
  }

}
