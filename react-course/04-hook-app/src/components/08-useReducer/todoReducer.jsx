

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add': return [...state, action.payload];
        // case 'delete': return state.map(task => task.id !== action.payload.id);
        default: return state;
    }
}