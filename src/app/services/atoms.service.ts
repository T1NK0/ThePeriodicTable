import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atom } from '../Atom';

@Injectable({
  providedIn: 'root'
})
export class AtomsService {

  dataUrl = 'https://periodic-table-elements-info.herokuapp.com/elements';

  constructor(private http:HttpClient) { }

  getAtoms (): Observable<Atom[]> {
    return this.http.get<Atom[]>(this.dataUrl)
  }
}
