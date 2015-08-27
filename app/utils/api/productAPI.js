/**
 * Created by nadir on 16/08/15.
 */
import ajax from 'superagent';

export default class ProductAPI {

    //const BASE_URL = 'http://localhost:';
    //const PORT = 3000;
    //const URL = '/api/products' ;

    static getAllProducts(){

        return new Promise((resolve, reject)=> {
            ajax.get('http://localhost:3000/api/products')
            .end((err, data)=>{
                    if(err) reject(err)
                    resolve(data.text);
                })
        })
    }

}
