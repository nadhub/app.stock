/**
 * Created by nadir on 29/08/15.
 */

import ajax from 'superagent';


export default class UserAPI {

    static login(data){

        return new Promise((resolve,reject) => {
            ajax.post('http://localhost:3000/login', data)
            .end((err, data)=> {
                    if(err) reject(err);
                    resolve(data.text);
                })
        })

    }

    static createUser(url, data){
        return new Promise((resolve, reject)=>{
            ajax.post(url, data)
            .end((err, data)=> resolve(data.text));

        })

    }

}