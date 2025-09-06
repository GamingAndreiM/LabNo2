import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Students {
  studentList = signal([
  {
    id: 1,
    name: 'Alice Santos',
    course: 'BSIT',
    yearLevel: 3,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Reyes',
    course: 'BSCS',
    yearLevel: 2,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Maria Lopez',
    course: 'BSECE',
    yearLevel: 4,
    status: 'Inactive'
  },
  {
    id: 4,
    name: 'Mark Dela Cruz',
    course: 'BSIT',
    yearLevel: 1,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Ella Garcia',
    course: 'BSIS',
    yearLevel: 3,
    status: 'Active'
  }
])
}
