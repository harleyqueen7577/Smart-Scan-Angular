import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenService } from '../shared/services/screen.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
}
