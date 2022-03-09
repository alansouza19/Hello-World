import { PersonsService } from './services/persons.service';
import { Person } from './models/person';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  person: Observable<Person[]>;
  displayedColumns = ['nome'];

  //personsService: PersonsService;

  constructor(private personsService: PersonsService) {
    //this.personsService = new PersonsService();
    this.person = this.personsService.list();
  }

  ngOnInit(): void {  }

  cadastrar(){

      console.log()
  }

}
