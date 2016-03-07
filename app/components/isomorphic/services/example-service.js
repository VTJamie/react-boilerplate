import fetch from 'isomorphic-fetch'

export default {

    getList: () => {
        return (dispatch, getState) => {
            fetch('/rest/example').then((response) => {
                response.json().then(function (result) {
                    dispatch({
                        type: "GOT_LIST",
                        result: result
                    });
                });
            });
        };
    }

}