import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HomePage } from 'src/app/home/home.page';

import { from } from 'rxjs';
import { UrlCreationOptions } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log()
  }

  onImageClick(): void {
    console.log("testestest");
    
    this.newItemEvent.emit(this.imageUrl);
  }

}
