import { Component, OnInit, Host, Optional } from '@angular/core';

import { ChildDataService } from './../../services/use-class';

@Component({
  selector: 'app-no-service-found',
  templateUrl: './no-service-found.component.html',
  styleUrls: ['./no-service-found.component.css']
})
export class NoServiceFoundComponent implements OnInit {
  content: string;

  constructor(
    @Host() @Optional() private childDataService: ChildDataService
  ) { }

  ngOnInit() {
    this.content = this.childDataService
                    ? this.childDataService.getData()
                    : 'No Service Found';
  }

}
