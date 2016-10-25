
function access(state=[], action) {
  switch(action.type) {
    case 'LOAD_ACCESS': {
      return action.access;
    }

    default: {
      return state;
    }
  }
}

export default access;