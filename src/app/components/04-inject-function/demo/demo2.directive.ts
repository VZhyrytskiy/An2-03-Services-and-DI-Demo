import { Directive, Inject, inject, InjectionToken } from '@angular/core';
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


@Directive({
  selector: 'app-demo2',
  standalone: true,
  providers: [
    DataService,
    ChildDataService,
    // case 3: used in useFactory function
    { provide: DataTop3, useFactory: DataTopNFactoryWithInject(3) }

  ]
})
export class Demo2Directive {
  content?: string;

  private dataService: DataService | null;
  // case 1: used in the initializer for fields
  private childDataService: ChildDataService = inject(ChildDataService);

  constructor(
    @Inject(DataTop3) private dataTop3: number[],
    @Inject(TokenAllData) private allData: number[]
  ) {
    // case 2: used in constructor
    this.dataService = inject(DataService, {
      optional: true
      // skipSelf?: boolean
      // self?: boolean
      // host?: boolean
    });
  }

  ngOnInit(): void {
    const d1 = this.dataService?.getData();
    const d2 = this.childDataService.getData();

    this.content = `s1: ${d1} <br> s2: ${d2} <br>s3: ${this.dataTop3} <br>s4: ${this.allData}`;
    console.log(this.content);
  }
}
