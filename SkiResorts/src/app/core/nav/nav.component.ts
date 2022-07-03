import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavItem } from 'src/app/model/nav-item';
import { ResortsService } from 'src/app/service/resorts.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private service: ResortsService) {}
  navItems: NavItem[] = [];

  ngOnInit(): void {
    this.getNavItems();
  }

  getNavItems(): void {
    this.service.getNavItems().subscribe({
      next: (item: NavItem[]) => {
        console.log(item);
        this.navItems = item;
      },
      error: (err: any) => console.log(err),
    });
  }
}
