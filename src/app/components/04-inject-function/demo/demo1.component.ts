import { Component, Inject, inject, InjectionToken } from '@angular/core';
import { ChildDataService, DataService, DataTop3, DataTopNFactoryWithInject } from 'src/app/services';
import { RandomService } from 'src/app/services/random.service';

const TokenAllData = new InjectionToken('Description: case 4', {
  providedIn: 'root',
  factory: () => {
    // case 4: used in factory function
    const randomService = inject(RandomService);
    return randomService.generate();
  }
});


@Component({
  selector: 'app-demo1',
  standalone: true,
  template: `
    <div>
      <h4>Demo1 works!</h4>
      <p [innerHTML]="content"></p>
    </div>
  `,
  providers: [
    DataService,
    ChildDataService,
    // case 3: used in useFactory function
    { provide: DataTop3, useFactory: DataTopNFactoryWithInject(3) }

  ]
})
export class Demo1Component {
  content?: string;

  private dataService: DataService;
  // case 1: used in the initializer for fields
  private childDataService: ChildDataService = inject(ChildDataService);

  constructor(
    @Inject(DataTop3) private dataTop3: number[],
    @Inject(TokenAllData) private allData: number[]
  ) {
    // case 2: used in constructor
    this.dataService = inject(DataService);
  }

  ngOnInit(): void {
    const d1 = this.dataService.getData();
    const d2 = this.childDataService.getData();

    this.content = `s1: ${d1} <br> s2: ${d2} <br>s3: ${this.dataTop3} <br>s4: ${this.allData}`;
  }
}
