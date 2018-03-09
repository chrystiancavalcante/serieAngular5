import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topo-app',
  templateUrl: './topo-app.component.html',
  styleUrls: ['./topo-app.component.css']
})
export class TopoAppComponent implements OnInit {
  @Input() topo: TopoAppComponent;
  constructor() { }

  ngOnInit() {
  }
  

}
