import { Injectable } from '@angular/core';
import { Atom } from '../Atom';
import { Period } from '../period';

@Injectable({
  providedIn: 'root'
})
export class AtomsMapperService {

assignAtomsToPeriods(atoms: Atom[]): Period[]{


  let mappingResult: Period[] = this.createPeriodTabelArray();

    for (let atom of atoms) {
      switch (atom.period) {
        case 1:
          //Calls our mappingResult which is a period. Therefor we need to look at the result 
          mappingResult[0].atoms.push(atom);
          break;
        case 2:
          mappingResult[1].atoms.push(atom);
          break;
        case 3:
          mappingResult[2].atoms.push(atom);
          break;
        case 4:
          mappingResult[3].atoms.push(atom);
          break;
        case 5:
          mappingResult[4].atoms.push(atom);
          break;
        case 6:
          //Since period 6 contains an extra tabel row, we need to sort them out of the ones we add to this row.
          //We know it's the values 57 to 71, so we gotta sort within those numbers to the other array.
          if (atom.number >= 57 && atom.number <= 71) {
            mappingResult[5].atoms.push(atom);
          } else {
            mappingResult[8].atoms.push(atom);
          }
          break;
        case 7:
          //Since period 6 contains an extra tabel row, we need to sort them out of the ones we add to this row.
          //We know it's the values 89 to 103, so we gotta sort within those numbers to the other array.
          if (atom.number <= 89 && atom.number >= 103) {
            mappingResult[6].atoms.push(atom);
          } else {
            mappingResult[9].atoms.push(atom);
          }
          break;
      }
    }

    return mappingResult;
  };
  
  //A function to create our array containing all our periods for the array. (The periods contain our atoms in the given period.)
  private createPeriodTabelArray() {
    //Defines our period arrays.
    let period1: Atom[] = [];
    let period2: Atom[] = [];
    let period3: Atom[] = [];
    let period4: Atom[] = [];
    let period5: Atom[] = [];
    let period6: Atom[] = [];
    let period7: Atom[] = [];
    let period8: Atom[] = [];
    let period9: Atom[] = [];
    let period10: Atom[] = [];

    //Creates our array, containing our periods, which has our atoms in them. (Aka all our data for the periodicTable.)
    let periodicTableData: Period[] = [
      //sets our period number, as it requires a number, and the lsit of atoms, which is in our periods.
      {period: 1, atoms: period1 },
      {period: 2, atoms: period2},
      {period: 3, atoms: period3},
      {period: 4, atoms: period4},
      {period: 5, atoms: period5},
      {period: 6, atoms: period6},
      {period: 7, atoms: period7},
      {period: 8, atoms: period8},
      {period: 9, atoms: period9},
      {period: 10, atoms: period10}
    ];
    //sets the function to return our array of data (periodicTableData).
    return periodicTableData;
    
  }
}
