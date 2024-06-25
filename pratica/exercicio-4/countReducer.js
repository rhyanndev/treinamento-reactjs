// Não altere o nome desta função
export function counterReducer(state, action) {

    switch (action.type) {
        case 'incremented':
            return ++state;

        case 'decremented':
            return --state;

        case 'reset':
            return 0;

        default:
            return state;
    }
}