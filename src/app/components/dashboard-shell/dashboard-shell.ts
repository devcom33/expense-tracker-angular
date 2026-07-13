import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Navbar } from "../navbar/navbar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-shell',
  imports: [Sidebar, Navbar, RouterOutlet],
  templateUrl: './dashboard-shell.html',
  styleUrl: './dashboard-shell.css',
})
export class DashboardShell {
}
