import { Component, OnInit, Host, Optional, SkipSelf } from '@angular/core';

import { DataService, ChildDataService } from '../../services';

@Component({
  selector: 'app-no-service-found',
  templateUrl: './no-service-found.component.html',
  styleUrls: ['./no-service-found.component.css'],
  providers: [ChildDataService]
})
export class NoServiceFoundComponent implements OnInit {
  content: string;

  constructor(
    // Case 1
    // private s0: DataService, // No provider for DataService
    // Case 2
    @Optional() private s1: DataService,
    // Case 3
    private s2: ChildDataService,
    @Host()
    @Optional()
    private s3: ChildDataService
  ) // Case 4
  // @SkipSelf()
  // @Optional()
  // private s3: ChildDataService
  {}

  ngOnInit() {
    const s1 = this.s1 ? this.s1.getData() : 'Service s1 not found.';
    const s2 = this.s2 ? this.s2.getData() : 'Service s2 not found.';
    const s3 = this.s3 ? this.s3.getData() : 'Service s3 not found.';

    this.content = `s1: ${s1}<br> s2: ${s2}<br>s3: ${s3}`;
  }
}
