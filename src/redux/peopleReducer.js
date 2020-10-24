const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const APPEND_PEOPLE = "APPEND PEOPLE";
const CLEAR_PEOPLE = "CLEAR PEOPLE";
const TOGGLE_FETCHING = "TOGGLE FETCHING";

const initialState = {
  people: [],
  isFetching: false,
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        people: state.people.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }

          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        people: state.people.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            };
          }

          return user;
        }),
      };

    case APPEND_PEOPLE:
      return { ...state, people: [...state.people, ...action.people] };

    case CLEAR_PEOPLE:
      return { ...state, people: [] };

    case TOGGLE_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};

export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const appendPeople = (people) => ({
  type: APPEND_PEOPLE,
  people,
});

export const clearPeople = () => ({
  type: CLEAR_PEOPLE,
});

export const toggleFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching,
});

export default peopleReducer;