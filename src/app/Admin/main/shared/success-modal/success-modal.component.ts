import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {
  @Output() modalClose = new EventEmitter
  @Input() text : string = ""
  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalClose.emit()
  }
}
