/**
 * Created by yan on 02/07/17.
 */
/**
 * Created by yan on 02/07/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import "rxjs/add/operator/toPromise";

@Injectable()
export class JSONService {

  constructor(private http:Http){}

  doGet(url) {
    return this.http.get(url).toPromise().then(response=> {return this.takeRows(response.json());});
  }
  doGetByParam(url,param:string):any {
    return this.http.get(url + '/'+param).toPromise().then(response => {return this.takeRows(response.json());});
  }
  doPost(url,body):any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, body,options).toPromise().then((response) => {return this.takeRows(response.json());});
  }

  doPut(url,body,param) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
    return this.http.put(url+"/"+param, body).toPromise().then((response) => {return this.takeRows(response.json());});
  }

  doDelete(url,param:string):any {
    return this.http.delete(url + "/"+param).toPromise().then((response) =>{return this.takeRows(response.json());});
  }
  doGetWithApiKey(key,url) {
    return this.http.get(url+"/"+key).toPromise().then(response=> {return this.takeRows(response.json());});
  }
  doGetByParamWithApiKey(key,url,param:string):any {
    return this.http.get(url + '/'+param+"/"+key).toPromise().then(response => {return this.takeRows(response.json());});
  }
  doPostWithApiKey(key,url,body):any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url+"/"+key, body,options).toPromise().then((response) => {return this.takeRows(response.json());});
  }

  doPutWithApiKey(key,url,body,param) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
    return this.http.put(url+"/"+param+"/"+key, body).toPromise().then((response) => {return this.takeRows(response.json());});
  }

  doDeleteWithApiKey(key,url,param:string):any {
    return this.http.delete(url + "/"+param+"/"+key).toPromise().then((response) =>{return this.takeRows(response.json());});
  }

  // private helper methods
  public takeRows(body){
    let article=body.rows;
    return article;
  }


}
