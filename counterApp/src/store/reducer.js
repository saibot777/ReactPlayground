const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
    }
    switch (action.type) {
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
    }
    switch (action.type) {
        case 'ADD':
            return {
                counter: state.counter + action.val
            }
    }
    switch (action.type) {
        case 'SUBSTRACT':
            return {
                counter: state.counter - action.val
            }
    }
    return state;
}

export default reducer;