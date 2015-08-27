/**
 * Created by nadir on 23/08/15.
 */

import alt from '../lib/alt';

class StockActions {


    addToStock(data){
        this.dispatch(data)
    }

}

export default alt.createActions(StockActions);