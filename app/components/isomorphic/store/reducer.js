export default (state, action) => {
   console.log(state, action);
   switch (action.type) {
    case "GOT_LIST": {
        return {
            exampleList: action.result
        };
    }
   }
   return state;
}