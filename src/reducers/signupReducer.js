  export default function signupReducer(state = [], action) {
    switch (action.type) {
      case 'CREATE_SIGNUP':
        return [...state,
          Object.assign({}, action.userData)
        ];

      default:
        return state;
    }
  }
