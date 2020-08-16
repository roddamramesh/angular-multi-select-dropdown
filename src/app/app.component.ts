import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-multi-select-dropdown';
  name = 'Angular';
  flagDiv = false;

  columns = {
    col0: {class: 'col-md-1', label: 'Id', field: 'id'},
    col1: {class: 'col-md-3', label: 'First Name', field: 'firstName'},
    col2: {class: 'col-md-3', label: 'Last Name', field: 'lastName'},
    col3: {class: 'col-md-1', label: 'Age', field: 'age'},
    col4: {class: 'col-md-2', label: 'Gender', field: 'gender'},
    col5: {class: 'col-md-2', label: 'Action', field: 'add'}
  };

  readOnlyColumns = {
    col0: {class: 'col-md-1', label: 'Id', field: 'id'},
    col1: {class: 'col-md-3', label: 'First Name', field: 'firstName'},
    col2: {class: 'col-md-3', label: 'Last Name', field: 'lastName'},
    col3: {class: 'col-md-1', label: 'Age', field: 'age'},
    col4: {class: 'col-md-2', label: 'Gender', field: 'gender'},
    col5: {class: 'col-md-2', label: 'Action', field: 'remove'}
  };


  objectKeys = Object.keys;


  data: any[] = [
    {id: 1, firstName: 'Ramesh', lastName: 'Roddam', age: 22, gender: 'M', action: 'add,remove'},
    {id: 2, firstName: 'Sravani', lastName: 'Suma', age: 25, gender: 'F', action: 'add,remove'},
    {id: 3, firstName: 'karthik', lastName: 'Neela', age: 22, gender: 'M', action: 'add,remove'},
    {id: 4, firstName: 'Sam', lastName: 'Smith', age: 31, gender: 'M', action: 'add,remove'},
    {id: 5, firstName: 'Alex', lastName: 'Edwards', age: 30, gender: 'M', action: 'add,remove'},
    {id: 6, firstName: 'Brandan', lastName: 'JohnSon', age: 29, gender: 'M', action: 'add,remove'},
    {id: 7, firstName: 'karan', lastName: 'Johar', age: 27, gender: 'M', action: 'add,remove'},
    {id: 8, firstName: 'sharuk', lastName: 'khan', age: 30, gender: 'M', action: 'add,remove'},
    {id: 9, firstName: 'sandy', lastName: 'Roy', age: 25, gender: 'M', action: 'add,remove'},
    {id: 10, firstName: 'Ranjith', lastName: 'Sharma', age: 30, gender: 'M', action: 'add,remove'},
    {id: 11, firstName: 'Anitha', lastName: 'Karan', age: 24, gender: 'F', action: 'add,remove'},
    {id: 12, firstName: 'Priya', lastName: 'kar', age: 26, gender: 'F', action: 'add,remove'},
    {id: 13, firstName: 'Kareena', lastName: 'Kapoor', age: 19, gender: 'F', action: 'add,remove'},
    {id: 14, firstName: 'Sanya', lastName: 'Miza', age: 18, gender: 'F', action: 'add,remove'}
  ];

  selectedData: any[] = [];




// tslint:disable-next-line:typedef
  hideShow() {
    this.flagDiv = !this.flagDiv;
  }



  addToList(rowData) {
    this.selectedData.push(rowData);
    this.selectedData = JSON.parse(JSON.stringify(this.selectedData));
  }

  removeFromList(i) {
    this.selectedData.splice(i, 1);
    this.selectedData = JSON.parse(JSON.stringify(this.selectedData));
  }


}
