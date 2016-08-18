import fetch from 'isomorphic-fetch'

export default {

    getTodos: () => {
        return (dispatch, getState) => {
            return fetch('/rest/todo').then((response) => {
                response.json().then(function (result) {
                    dispatch({
                        type: "GOT_TODO_LIST",
                        result: result
                    });
                });
            });
        };
    },
    addTodo: (todo) => {
        return (dispatch, getState) => {            
            return fetch('/rest/todo', {
                method: "POST", 
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
                body: JSON.stringify(todo)
            }).then((response) => {
                response.json().then(function (result) {
                    dispatch({
                        type: "ADDED_TODO"
                    });
                });
            });
        };
    },
    updateTodo: (todo) => {
     return (dispatch, getState) => {
            return fetch('/rest/todo/' + todo.id, {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
                body: JSON.stringify(todo)
            }).then((response) => {
                response.json().then(function (result) {
                    dispatch({
                        type: "UPDATED_TODO"
                    });
                });
            });
        };
    },
    deleteTodo: (todo) => {
     return (dispatch, getState) => {
            return fetch('/rest/todo/' + todo.id, {
                method: "DELETE",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then((response) => {
                response.json().then(function (result) {
                    dispatch({
                        type: "DELETED_TODO"
                    });
                });
            });
        };
    }

}