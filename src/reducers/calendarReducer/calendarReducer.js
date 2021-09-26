import moment from "moment";

import {
   nextMonth_Type,
   prevMonth_Type,
   todayMonth_Type
} from "./types"

const initialState = {
   _startWeek_Monday: moment.updateLocale('en', { week: { dow: 1 } }),
   today: moment()

}

export const calendarReducer = (state = initialState, action) => {
   switch (action.type) {
      case prevMonth_Type:
         return { ...state, today: action.payload }
      case todayMonth_Type:
         return { ...state, today: action.payload }
      case nextMonth_Type:
         return { ...state, today: action.payload }

      default:
         return state
   }
}

export const prevMonth = (payload) => ({ type: prevMonth_Type, payload });
export const todayMonth = (payload) => ({ type: todayMonth_Type, payload });
export const nextMonth = (payload) => ({ type: nextMonth_Type, payload });