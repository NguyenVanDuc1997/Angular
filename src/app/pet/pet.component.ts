import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = 'Hung';
  petImage = 'https://afamilycdn.com/2019/10/24/5bd607e0c0cb89afbe0d17eda2f628fc-15719007946641269292659.png';


  updateName(event) {
    this.petName = event.target.value;
  }

  updateImage(event) {
    this.petImage = event.target.value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
