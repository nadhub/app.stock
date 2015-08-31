/**
 * Created by nadir on 30/08/15.
 */

import alt from '../lib/alt';
import RouterActions from '../actions/routerActions';

class RouterStore{
    constructor(){
        this.bindActions(RouterActions);
       /* this.exportPublicMethods({
            nextTransitionPath: this.nextTransitionPath
        })*/
        this._nextRoutePath = null;
    }

    onStoreRouterTransitionPath(path){
        this._nextRoutePath = path;
    }

    get nextTransitionPath(){
        let nextPAth = this._nextRoutePath;
        this._nextRoutePath = null;
        return nextPAth;
    }


}

export default alt.createStore(RouterStore);