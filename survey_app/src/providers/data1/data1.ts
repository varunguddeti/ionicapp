import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data1 {
 
    data1: any;
 
    constructor(public http: Http) {
 
    }
 
    load(){
 
        if(this.data1){
            return Promise.resolve(this.data1);
        }
 
        return new Promise(resolve => {
 
            this.http.get('assets/data/questions1.json').map(res => res.json()).subscribe(data1 => {
                this.data1 = data1.questions;
                resolve(this.data1);
            });
 
        });
 
    }
 
}