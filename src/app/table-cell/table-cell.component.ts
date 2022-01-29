import { Component, Input, OnInit } from '@angular/core';
import { Atom } from '../Atom';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})

export class TableCellComponent implements OnInit {


  @Input('Atom')
  atom: Atom = new Atom;

  constructor() { }

  ngOnInit(): void {

  }

}
