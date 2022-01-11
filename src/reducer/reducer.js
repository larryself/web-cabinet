import {CHANGE_OPERATOR} from '../action/action'

const initialStore = {
    isLoading: false,
    operator: {
        id: '',
        name: '',
        logo: '',
    },
}
const reducer = (state = initialStore, action) => {
    console.log('action',action)
    switch (action.type) {
        case CHANGE_OPERATOR:
            return {...state, operator: {...action.operator}};
        default:
            return {...state};
    }
}
export {reducer,initialStore}