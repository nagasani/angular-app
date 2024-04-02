import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from '../services/players.service';
import { Players } from '../players.model';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  playerss: Players[] | undefined;

  constructor(private playersService: PlayersService, private router: Router) {

  }

  ngOnInit(): void {
    this.getPlayers();
  }

  private getPlayers() {
    this.playersService.getPlayersList().subscribe(data => {
      this.playerss = data;
    });
  }

  updatePlayers(email: string) {
    this.router.navigate(['update-players', email]);
  }

}
