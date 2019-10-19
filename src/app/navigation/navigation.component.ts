import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'dh-navigation, nav[dh-navigation]',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  @HostBinding('attr.aria-label') ariaLabel = 'Main navigation';
  @HostBinding('class.navbar') navBarClass = true;

  constructor() {}

  ngOnInit() {}
}
