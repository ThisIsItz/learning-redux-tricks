export const AddTextReducer = (state = '', action) => {
    switch (action.type) {
      case 'TEXT':
        return `I'm a text` 
      default:
       return state;
    }
}
