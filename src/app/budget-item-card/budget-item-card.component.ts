import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from '../model/budget-item-model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item: BudgetItem = new BudgetItem('', 0);
  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  OnDelete() {
    this.deleteItem.emit();
  }

  onCardClick(budgetItem: BudgetItem) {
    this.cardClick.emit(budgetItem);
  }
}
