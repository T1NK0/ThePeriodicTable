import { Component, OnInit } from '@angular/core';
import { Atom } from '../Atom';
import { AtomsService } from '../services/atoms.service';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  atoms: Atom[] = [];


  //Calls our AtomsService, we need to get the atoms from the URL.
  //Constructor gets run multiple times, where as ngOnInit get runned once.
  constructor(private AtomsService: AtomsService) { }

  //get's runned once.
  ngOnInit(): void {
            //Run our getAtoms service.
            this.AtomsService.getAtoms().subscribe(periodicTableData => {
              //sets our api data as "periodicTabelData", which we can make a for loop on, to look at each record in the json file.
                for(let dataAtom of periodicTableData) {
                  //Create a new atom from our atom class
                  let atom = new Atom ();
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
                }
              )
    }

  }
