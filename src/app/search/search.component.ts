import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


 @Input()searchedWord : string = "";
@Output() serchedWordforfiltering : EventEmitter<string> = new EventEmitter<string>;

onChangeVal(){
  this.serchedWordforfiltering.emit(this.searchedWord);
}

}
