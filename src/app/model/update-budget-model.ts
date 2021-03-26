import { BudgetItem } from "./budget-item-model";

export interface UpdateBudget {
  old: BudgetItem;
  new: BudgetItem;
}
