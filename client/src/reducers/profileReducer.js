import { GET_PROFILE, SET_CURRENT_USER, GET_PROFILES,GET_OTHERUSER_PROFILE } from "../actions/types";

const initialState = {
  profile: {
    loaded: false,
  },

  profiles: [],
  loaded:false,
  OtherUserProfile: {
    loaded:false,
  },
  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: {
          ...action.payload,
          loaded: true,
        },
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        profile: null,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: [...action.payload],
          loaded: true,
        
      };
    case GET_OTHERUSER_PROFILE:
      return {
        ...state,
        OtherUserProfile:{
          ...action.payload,
          loaded: true,
        },
        
      }
    default:
      return state;
  }
}
