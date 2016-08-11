import extend from 'extend'
var state = {
        left: false,
        right: false
    };

export default {
    closePanels: () => {
        return (dispatch, getState) => {            
            state.left = false;
            state.right = false;
            dispatch({
                type: "REACT_PANEL",
                result: extend({}, state)
            });            
        };
    },
    openLeftPanel: () => {        
        return (dispatch, getState) => {            
            state.left = true;
            state.right = false;
            dispatch({
                type: "REACT_PANEL",
                result: extend({}, state)
            });            
        };
    },
    openRightPanel: () => {        
        return (dispatch, getState) => {            
            state.left = false;
            state.right = true;
            dispatch({
                type: "REACT_PANEL",
                result: extend({}, state)
            });            
        };
    },
    closeLeftPanel: () => {        
        return (dispatch, getState) => {            
            state.left = false;            
            dispatch({
                type: "REACT_PANEL",
                result: extend({}, state)
            });            
        };
    },
    closeRightPanel: () => {        
        return (dispatch, getState) => {            
            state.right = false;            
            dispatch({
                type: "REACT_PANEL",
                result: extend({}, state)
            });            
        };
    },
    toggleLeftPanel: () => {        
        return (dispatch, getState) => {  
            state.left = !state.left;                        
            dispatch({
                type: "REACT_PANEL",
                result: extend({}, state)
            });            
        };
    },
    toggleRightPanel: () => {        
        return (dispatch, getState) => {            
            state.right = !state.right;            
            dispatch({
                type: "REACT_PANEL",
                result: extend({}, state)
            });             
        };
    }       

}