import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value: number = 10;


  ngOnInit() {
    // if (this.value == 5) {
    //   console.log('inside first if');
    // } else if (this.value == 10){
    //   console.log('inside second if');
    // } else if (this.value == 100) {
    //   console.log('inside third if');
    // } else {
    //   console.log('none');
    // }

    switch(this.value) {
      case 5: 
        console.log('case 5'); //case must be indented as such
        break;
      case 10:
        console.log('case 10');
        break;
      case 100:
        console.log('case 100');
        break;
      default:
        console.log('none');
        break;
    }
  }

}
