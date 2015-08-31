/**
 * Created by nadir on 23/08/15.
 */

import alt from '../lib/alt';
import UserAPI from '../utils/api/userAPI';

class authActions {


   login(token){
       this.dispatch(token);
    }

   logout(){
       localStorage.removeItem('token');
       this.dispatch()
   }


}

export default alt.createActions(authActions);