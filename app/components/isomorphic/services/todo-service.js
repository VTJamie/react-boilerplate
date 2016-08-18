import fetch from 'isomorphic-fetch'

function getTodos(dispatch, getState) {
    return fetch('/rest/todo').then((response) => {
        response.json().then(function (result) {
            dispatch({
                type: "GOT_TODO_LIST",
                result: result
            });
        });
    });
}

var service = {};

    service.getTodos = () => {
        return (dispatch, getState) => {
            return getTodos(dispatch, getState);
        };
    };
    service.addTodo = (todo) => {
        return (dispatch, getState) => {            
            return fetch('/rest/todo', {
                method: "POST", 
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
                body: JSON.stringify(todo)
            }).then((response) => {
               getTodos(dispatch, getState);
            });
        };
    };
    service.updateTodo = (todo) => {
     return (dispatch, getState) => {
            return fetch('/rest/todo/' + todo.id, {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
                body: JSON.stringify(todo)
            }).then((response) => {
               getTodos(dispatch, getState);
            });
        };
    };
    service.deleteTodo = (todo) => {
     return (dispatch, getState) => {
            return fetch('/rest/todo/' + todo.id, {
                method: "DELETE",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then((response) => {
                getTodos(dispatch, getState);
            });
        };
    };

export default service