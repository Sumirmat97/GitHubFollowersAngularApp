import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DataService{

  constructor(http: HttpClient) {
      super("https://api.github.com/users/Sumirmat97/followers", http);
  }

}
