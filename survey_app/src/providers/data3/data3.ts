import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data3 {
 
    data3: any;
 
    constructor(public http: Http) {
 
    }
 
    load(){
 
        if(this.data3){
            return Promise.resolve(this.data3);
        }
 
        return new Promise(resolve => {
 
            this.http.get('assets/data/questions3.json').map(res => res.json()).subscribe(data3 => {
                this.data3 = data3.questions;
                resolve(this.data3);
            });
 
        });
 
    }
 
}