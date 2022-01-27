import { Component, OnInit } from '@angular/core';
import { Atom } from '../Atom';
import { AtomsService } from '../services/atoms.service';


@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent implements OnInit {

  atoms: Atom[] = [];

  constructor(private AtomsService: AtomsService) { }

  ngOnInit(): void {
        //Run our getAtoms service.
        this.AtomsService.getAtoms().subscribe(periodicTableData => {
          //sets our api data as "periodicTabelData", which we can make a for loop on, to look at each record in the json file.
            for(let dataAtom of periodicTableData) {
              //Create a new atom from our atom class
              let atom = new Atom ();
                atom.atomicMass = dataAtom.atomicMass;
                atom.atomicNumber = dataAtom.atomicNumber;
                atom.name = dataAtom.name;
                atom.symbol = dataAtom.symbol;
                this.atoms.push(atom);
              }
            }
          )
  }

}
