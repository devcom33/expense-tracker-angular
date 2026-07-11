import { computed, Service, Signal, signal } from '@angular/core';
import { Transaction } from '../models/transaction';

@Service()
export class Financial {
    private transactionState = signal<Transaction[]>(this.loadFromStorage());

    readonly transactions = this.transactionState.asReadonly();

    totalIncome = computed(() => {
        return this.transactions()
        .filter((t) => t.type === 'Income')
        .reduce((sum, t) => sum + t.amount, 0);
    });

    totalExpense = computed(() => {
        return this.transactions()
        .filter((t) => t.type === 'Expense')
        .reduce((sum, t) => sum + t.amount, 0);
    });

    totalBalance = computed(() => (
        this.totalIncome() - this.totalExpense()
    ));

    addTransaction(nwTx : Transaction)
    {
        this.transactionState.update(curr => {
            const updatedList = [...curr, nwTx];
            this.saveToStorage(updatedList);
            return updatedList;
        });
    }

    private saveToStorage(list : Transaction[]){
        localStorage.setItem('transaction_data',JSON.stringify(list))
    }

    private loadFromStorage(){
        const data = localStorage.getItem('transaction_data');

        return data ? JSON.parse(data) : [];
    }
}
