import { Component, OnInit } from '@angular/core';
import { Atom } from '../Atom';
import { Period } from '../period';
import { AtomsMapperService } from '../services/atoms-mapper.service';
import { AtomsService } from '../services/atoms.service';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  atoms: Atom[] = [];
  period1: Atom[] = [];
  period2: Atom[] = [];
  period3: Atom[] = [];
  period4: Atom[] = [];
  period5: Atom[] = [];
  period6: Atom[] = [];
  period7: Atom[] = [];
  period8: Atom[] = [];
  period9: Atom[] = [];
  period10: Atom[] = [];
  periods: Atom[] = [];
  tableData: Period[] = [];

  //Calls our AtomsService, we need to get the atoms from the URL.
  //Constructor gets run multiple times, where as ngOnInit get runned once.
  constructor(private AtomsService: AtomsService, private sortAtomsToPeriods:AtomsMapperService ) { }

  //get's runned once.
  ngOnInit(): void {
    //Run our getAtoms service.
    this.AtomsService.getAtoms().subscribe(periodicTableAtoms => {
      next:
      //sets our api data as "periodicTabelData", which we can make a for loop on, to look at each record in the json file.
      for (let dataAtom of periodicTableAtoms) {
        //Create a new atom from our atom class
        let atom = new Atom();
        atom.atomicMass = dataAtom.atomicMass;
        atom.number = dataAtom.number;
        atom.name = dataAtom.name;
        atom.symbol = dataAtom.symbol;
        atom.group = dataAtom.group;
        atom.period = dataAtom.period;
        atom.xpos = dataAtom.xpos;
        atom.ypos = dataAtom.ypos;
        this.atoms.push(atom);
      }
      
      this.tableData = this.sortAtomsToPeriods.assignAtomsToPeriods(this.atoms);
    })
  }

}
