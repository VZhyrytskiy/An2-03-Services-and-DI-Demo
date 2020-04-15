import { Component } from '@angular/core';
import { ChildDataService } from './services/child-data.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    { provide: ChildDataService, useClass: DataService }
  ]
})
export class AppComponent {
  title = 'app works!';
}
