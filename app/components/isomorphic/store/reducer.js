import extend from 'extend'

export default (state, action) => {   	
   switch (action.type) {
    case "GOT_LIST": {
    	state = extend({}, state, {exampleList: action.result});           	       
    	break;        
    }
    case "REACT_PANEL": {            
    	state = extend({}, state, {reactPanel: action.result});           	                  
       break;
    }
    case "GOT_TODO_LIST": {
        state = extend({}, state, {todos: action.result});
        break;
    }
   }      
   return state;
}