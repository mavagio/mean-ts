import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  public testValues: any = {};
  constructor() { }

  ngOnInit() {
  }

  public onSubmit (): void {
    console.log(this.testValues);
  }
}
