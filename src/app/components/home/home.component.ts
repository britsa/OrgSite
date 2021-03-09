import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @ViewChild( 'modal', {} ) modalTemplatefilter: ElementRef;
  modal: any;
ngOnInit()
{
  setTimeout( function() {
    M.AutoInit();
    var elems = document.getElementById('modal');
    var instances = M.Modal.init(elems, {});  }, 100 );
    var elem = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elem, {});
    
}


modalOpen() {
  $( "#modal" ).modal( { "dismissible": false } );
  this.modal = M.Modal.getInstance( this.modalTemplatefilter.nativeElement );
  this.modal.open();
} 

}
