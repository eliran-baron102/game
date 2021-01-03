import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 public games:any;
 public GlobalURL = "http://www.localhost:5000/"
  constructor(public http:HttpClient) { }

  getAllGames() {
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.get(this.GlobalURL + 'game/getAllGames').subscribe(data => {
          console.log("Games : ", data)
          this.games = data;
          resolve(data);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  
  getGameById(gameId) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.get(this.GlobalURL + 'game/getGamebyId?id='+gameId).subscribe(data => {
          console.log("Games : ", data)
          resolve(data);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  inserComment(id , text){
    return new Promise(async (resolve, reject) => {
        try {
          await this.http.get(this.GlobalURL + `comment/insertComment?id=${id}&text=${text}`).subscribe(data => {
            resolve(data);
          });
        } catch (err) {
          console.log(err);
        }
      });
  }


  getAllComments(id){
    return new Promise(async (resolve, reject) => {
        try {
          await this.http.get(this.GlobalURL + `comment/getAllCommentsByGameId?id=${id}`).subscribe(data => {
            resolve(data);
          });
        } catch (err) {
          console.log(err);
        }
      });
  }


}
