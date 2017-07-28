import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data2 {
 
    data2: any;
 
    constructor(public http: Http) {
 
    }
 
    load(){
 
        if(this.data2){
            return Promise.resolve(this.data2);
        }
 
        return new Promise(resolve => {
 
            this.http.get('assets/data/questions2.json').map(res => res.json()).subscribe(data2 => {
                this.data2 = data2.questions;
                resolve(this.data2);
            });
 
        });
 
    }
 
}