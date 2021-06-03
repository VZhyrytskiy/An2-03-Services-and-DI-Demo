import { Directive, Optional, Host, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Directive({
  selector: '[appSomeDir]'
})
export class SomeDirDirective implements OnInit {
  constructor(
    // Host компонент для директивы - это тег <p>
    @Host()
    @Optional()
    private dataService: DataService
  ) // Host комонент - это обычно компонент, который запрашивает зависимость
  // но для компонента, который проецируется, это компонент, в который он проецируется
    {}

  ngOnInit(): void {
    console.log(this.dataService ? this.dataService.getData() : 'null');
  }
}
