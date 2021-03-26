import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../model/budget-item-model';
import { UpdateBudget } from '../model/update-budget-model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(budgetItem: BudgetItem) {
    this.budgetItems.push(budgetItem);
    this.totalBudget += budgetItem.amount;
  }

  deleteItem(budgetItem: BudgetItem) {
    let index = this.budgetItems.indexOf(budgetItem);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= budgetItem.amount;
  }

  updateItem(updatedEvent: UpdateBudget) {
    this.budgetItems[this.budgetItems.indexOf(updatedEvent.old)] = updatedEvent.new;
    this.totalBudget -= updatedEvent.old.amount;
    this.totalBudget += updatedEvent.new.amount;
  }

}
