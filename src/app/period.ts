import { Atom } from "./Atom";

export interface Period {
    //sets our period interface, to require a period number, and an array of atoms in the period.
    period: number;
    atoms: Atom[];
}