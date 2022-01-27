import { createStore } from 'redux';

const initialState = {
    value: '',
    data: ['HelloWorld'],
}
const todoReducer = (state = initialState, action) => {
    const {
        type,
        item,
    } = action;

    if (type === 'TODO_ONCHANGE') {
        return Object.assign({}, state, {
            value: action.item,
        });
    }
    if (type === 'TODO_ADD') {

        return Object.assign({}, state, {
            item: {
                value: '',
            },
            data: [
                ...(state.data),
                state.value,
            ],
        });
    }
    if (type === 'TODO_DELETE') {
    
    }
    return state;
};

const store = createStore(todoReducer);

export default store;