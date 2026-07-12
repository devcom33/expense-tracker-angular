export interface Transaction {
  type : 'Income' | 'Expense',
  amount : number,
  category : string,
  notes: string,
}
