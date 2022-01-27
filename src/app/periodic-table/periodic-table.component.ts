import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  //Calls our AtomsService, we need to get the atoms from the URL.
  //Constructor gets run multiple times, where as ngOnInit get runned once.
  constructor() { }

  //get's runned once.
  ngOnInit(): void {

    }

  }
