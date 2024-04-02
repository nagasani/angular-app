import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Players } from '../players.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private basUrl = "http://localhost:8080/api/players/no-sport"

  constructor(private httpClient: HttpClient) {
  }

  getPlayersList(): Observable<Players[]> {
    return this.httpClient.get<Players[]>(`${this.basUrl}`);
  }

} 