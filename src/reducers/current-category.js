const updateCurrentCategory = (state, action) => {

  if (state === undefined) {
    return {
      id: null
    }
  }
  switch (action.type) {
    case 'SET_CURRENT_CATEGORY':
      return {
        id: action.payload
      };

    default:
      return state.currentCategory;
  }
}

export default updateCurrentCategory;