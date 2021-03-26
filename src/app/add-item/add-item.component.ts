import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from '../model/budget-item-model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', 0);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.item.amount !== 0) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
    }
  }

  onSubmit (form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
