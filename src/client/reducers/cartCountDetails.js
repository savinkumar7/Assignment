import {ADD_TO_CART} from '../actions/cartCount';
import {REMOVE_FROM_CART} from '../actions/cartCount';

export default (state = [], action) => {
      
        switch(action.type){
            case ADD_TO_CART :
                    {console.log(state)}
                 return action.payload++;
                
                case REMOVE_FROM_CART :
                    return action.payload--;
                    default:
                        return state;
        }
}