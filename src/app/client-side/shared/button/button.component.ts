import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text! : string 
  @Input() class! : string
  @Output() navigate = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  changeRoute() {
    this.navigate.emit()
  }

}
