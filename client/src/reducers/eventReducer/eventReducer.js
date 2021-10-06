import {
   getAllEvents_Type,
   getEventByID_Type,
   getEventByUserID_Type,
   getEventByUserIDAndTime_Type,
   addEvent_Type,
   updateEvent_Type,
   deleteEvent_Type,
   search_Type
} from "./types";

export const initialState = {
   eventsData: [],
   eventDataByID: [],
   eventDataForMonth: [],
   eventDataByUserID: [],
   filterEvents: []
}

export const eventReducer = (state = initialState, action) => {
   switch (action.type) {

      case getAllEvents_Type:
         return { ...state, eventsData: action.payload }

      case getEventByID_Type:
         return {
            ...state, eventDataByID: action.payload
         }

      case getEventByUserID_Type:
         return {
            ...state, eventDataByUserID: action.payload
         }

      case getEventByUserIDAndTime_Type:
         return {
            ...state, eventDataForMonth: action.payload
         }


      case addEvent_Type:
         return {
            ...state, eventsData: state.eventsData.concat({ ...action.payload })
         }

      case updateEvent_Type:
         return { ...state }

      case deleteEvent_Type:
         return { ...state }

      case search_Type:
         const title = state.eventsData.filter((word) => {
            return word.title_event.includes(action.payload);
         });
         const content = state.eventsData.filter((word) => {
            return word.content_event.includes(action.payload)
         });

         const filterEventsData = title.concat(content).filter(
            (v, i, a) => a.findIndex(t => (t.id === v.id)) === i)

         return { ...state, filterEvents: filterEventsData }

      default:
         return state
   }
}

export const getAllEvents_Event = (payload) => ({ type: getAllEvents_Type, payload });
export const getEventByID_Event = (payload) => ({ type: getEventByID_Type, payload });
export const getEventByUserID_Event = (payload) => ({ type: getEventByUserID_Type, payload });
export const getEventByUserIDAndTime_Event = (payload) => ({ type: getEventByUserIDAndTime_Type, payload });

export const addEvent_Event = (payload) => ({ type: addEvent_Type, payload });
export const updateEvent_Event = (payload) => ({ type: updateEvent_Type, payload });
export const deleteEvent_Event = (payload) => ({ type: deleteEvent_Type, payload });
export const search_Event = (payload) => ({ type: search_Type, payload });


