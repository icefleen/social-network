const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const APPEND_PEOPLE = "APPEND PEOPLE";
const CLEAR_PEOPLE = "CLEAR PEOPLE";

const initialState = {
  people: [],
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

    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const appendPeopleActionCreator = (people) => ({
  type: APPEND_PEOPLE,
  people,
});

export const clearPeopleActionCreator = () => ({
  type: CLEAR_PEOPLE,
});

export default peopleReducer;
