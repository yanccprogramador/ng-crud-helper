/**
 * Created by yan on 02/07/17.
 */
/**
 * Created by yan on 02/07/17.
 */
import { Injectable } from '@angular/core';
import {Article} from '../articles';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import "rxjs/add/operator/toPromise";

@Injectable()
export class ArticleService {

  private _url:string = "https://yc-ti-blog.herokuapp.com/";
  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
  constructor(private http:Http){}
  getAll() {
    return this.http.get(this._url).toPromise().then(response=> {return this.takeRows(response.json());});
  }
  getMine(dono:string):any {
    return this.http.get(this._url + 'meu/'+dono).toPromise().then(response => {return this.takeRows(response.json());});
  }
  getById(id: number):any {
    return this.http.get(this._url + id).toPromise().then(response => {return this.takeRows(response.json());});
  }
  search(key){
    return this.http.get(this._url +"search/" +key).toPromise().then(response => {return this.takeRows(response.json());});
  }
  create(article: Article):any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._url, article,options).toPromise().then((response) => {console.log(response.json());return response.json();});
  }

  update(article : any,id : number) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
    return this.http.put(this._url+id, article).toPromise().then((response) => {return response.json();});
  }

  delete(id: number):any {
    return this.http.delete(this._url + id).toPromise().then((response) =>{return response.json();});
  }

  // private helper methods
  private takeRows(body){
    let article=body.rows;
    /*article.titulo=body.rows.titulo;
    article.dono=body.rows.dono;
    article.artigo=body.rows.artigo;*/
    return article;
  }


}
