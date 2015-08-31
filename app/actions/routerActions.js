/**
 * Created by nadir on 30/08/15.
 */

import alt from '../lib/alt';


class routerActions {

    storeRouterTransitionPath(path){
        this.dispatch(path)
    }

}

export default alt.createActions(routerActions);