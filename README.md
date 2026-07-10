# expense-tracker-angular

An Angular expense tracking application built with Reactive Forms, Tailwind CSS, and ag-Charts for financial data visualization.

## Features

- **Transaction Management**: Add income and expense transactions with categorization
- **Financial Dashboard**: View summary statistics and charts of your financial data
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS
- **Form Validation**: Dynamic form validation based on transaction categories
- **Data Persistence**: Transactions saved to browser localStorage
- **Charts & Visualization**: Interactive charts powered by ag-Charts

## Development server

To start a local development server, run:

```bash
npm start
```

or

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Project Structure

- **`src/app/components/`**: Reusable components
  - `dashboard-shell`: Main dashboard with stats and charts
  - `transaction-form`: Form for adding transactions
  - `stats-summary`: Transaction statistics view
- **`src/app/services/`**: Business logic and state management
  - `financial`: Manages transactions and localStorage
- **`src/app/models/`**: TypeScript interfaces
  - `transaction`: Transaction data model

## Technologies Used

- **Angular 22**: Latest Angular framework
- **TypeScript**: Type-safe development
- **Reactive Forms**: Dynamic form validation
- **Tailwind CSS**: Utility-first CSS framework
- **ag-Charts**: Data visualization library
- **Vitest**: Unit testing framework

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.