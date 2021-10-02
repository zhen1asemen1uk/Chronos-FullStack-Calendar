import {
   getAllEvents_Type,
   getEventByID_Type,
   getEventByUserID_Type,
   addEvent_Type,
   updateEvent_Type,
   deleteEvent_Type,
   search_Type
} from "./types";

export const initialState = {
   eventsData: [],
   eventDataByID: [],
   eventDataByUserID: [],
   filterEvents:[]
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

export const getAllevents_event = (payload) => ({ type: getAllEvents_Type, payload });
export const getEventByID_event = (payload) => ({ type: getEventByID_Type, payload });
export const getEventByUserID_event = (payload) => ({ type: getEventByUserID_Type, payload });E



export const addEvent_event = (payload) => ({ type: addEvent_Type, payload });

export const updateEvent_event = (payload) => ({ type: updateEvent_Type, payload });
export const deleteEvent_event = (payload) => ({ type: deleteEvent_Type, payload });

export const search_event = (payload) => ({ type: search_Type, payload });


