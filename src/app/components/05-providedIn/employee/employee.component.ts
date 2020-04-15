import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-employee',
  template: ''
})
export class EmployeeComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    console.log(this.configService.getValue());
  }
}
