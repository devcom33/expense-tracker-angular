import { Component, inject } from '@angular/core';
import { Financial } from '../../services/financial';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-types';


@Component({
  selector: 'app-stats-summary',
  imports: [AgCharts],
  templateUrl: './stats-summary.html',
  styleUrl: './stats-summary.css',
})
export class StatsSummary {
  financialService = inject(Financial);
  
  totalIncome = this.financialService.totalIncome();
  totalExpense = this.financialService.totalExpense();
  totalBalance = this.financialService.totalBalance();
  maxExpense = this.financialService.mostSpending();
  expenseCategory = this.financialService.expenseCategory();


  chartOptions: AgChartOptions = {
    data: this.expenseCategory,
    series: [
      {
        type: 'bar',
        xKey: 'category',
        yKey: 'amount'
      }
    ]
  };

  options:AgChartOptions = {

    data: [
      { asset: "Income", amount: this.totalIncome },
      { asset: "Expense", amount: this.totalExpense },
      { asset: "Balance", amount: this.totalBalance },
    ],

    title: {

      text: "Report Overview",

    },

    series: [

      {
        type: "donut",
        calloutLabelKey: "asset",
        angleKey: "amount",

      },

    ],

  };




}
