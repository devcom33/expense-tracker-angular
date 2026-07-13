import { Routes } from '@angular/router';
import { TransactionForm } from './components/transaction-form/transaction-form';
import { DashboardShell } from './components/dashboard-shell/dashboard-shell';
import { StatsSummary } from './components/stats-summary/stats-summary';


export const routes: Routes = [
    {
        path: '',
        component: DashboardShell,
        children: [
            { path: '', component: StatsSummary},
            { path: 'add-transaction', component: TransactionForm}
        ]
    }
];
