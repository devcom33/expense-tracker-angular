import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Financial } from '../../services/financial';
import { Transaction } from '../../models/transaction';


@Component({
  selector: 'app-transaction-form',
  imports: [ReactiveFormsModule],
  templateUrl: './transaction-form.html',
  styleUrl: './transaction-form.css',
})
export class TransactionForm {
  private fg = inject(FormBuilder);
  financialService = inject(Financial);

  transactionForm = this.fg.nonNullable.group({
    type : ['Expense' as Transaction['type'], Validators.required],
    amount : [0, Validators.required],
    category : ['Housing', Validators.required],
    notes: [''],
  });


  showNotes = toSignal(this.transactionForm.get('category')!.valueChanges.pipe(
    map(value => value === 'Other')
  ),
  {initialValue: this.transactionForm.get('category')?.value === 'Other'}
  );

  constructor(){
    this.transactionForm.get('category')?.valueChanges.subscribe(category => {
      const notesControl = this.transactionForm.get('notes');

      if (category === 'Other') {
        notesControl?.setValidators([Validators.required]);
      } else {
        notesControl?.clearValidators();
      }

      // run validation check on this control instantly
      notesControl?.updateValueAndValidity();
    }
      
    )
  }


  onSubmit() {
    const newTransaction = this.transactionForm.getRawValue();
    //console.log(newTransaction.amount);
    
    this.financialService.addTransaction(newTransaction);

    this.transactionForm.reset(
      {
        type: 'Expense',
        amount: 0,
        category: 'Housing',
        notes: ''
      }
    );
  }
}
