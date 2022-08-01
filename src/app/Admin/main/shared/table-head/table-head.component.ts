import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent implements OnInit {
  @Input() searchValue! : string 
  @Input() someThingrray! : any[]
  constructor() { }

  ngOnInit(): void {

  }

}
