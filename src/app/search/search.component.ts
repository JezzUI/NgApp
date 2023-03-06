import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


 searchedWord : string = "";
@Output() serchedWordforfiltering : EventEmitter<string> = new EventEmitter<string>;

onChangeVal(){
  this.serchedWordforfiltering.emit(this.searchedWord);
}

}
