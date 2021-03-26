import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from '../model/budget-item-model';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { UpdateBudget } from '../model/update-budget-model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = [];
  @Output() parentDeleteItem: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() updateItem: EventEmitter<UpdateBudget> = new EventEmitter<UpdateBudget>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  deleteItem (budgetItem: BudgetItem) {
    this.parentDeleteItem.emit(budgetItem);
  }

  cardClick (item: BudgetItem) {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: "500px",
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateItem.emit({
          old: item,
          new: result
        });
      }
    });
  }
}
