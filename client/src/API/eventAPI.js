import api from '.'

import { isLoading_Auth, isModal_Auth } from '../reducers/authReducer/authReducer';
import {
   addEvent_Event,
   deleteEvent_Event,
   getAllEvents_Event,

   getEventByUserID_Event,
   getEventByID_Event,
   updateEvent_Event,
   search_Event,
   getEventByUserIDAndTime_Event
} from '../reducers/eventReducer/eventReducer';

export const eventAPI = {
   getAllEvents() {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataEvents = await api.get(`/api/event`);

            return dispatch(getAllEvents_Event(dataEvents.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },

   getEventByID(id) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataEvents = await api.get(`/api/event/${id}`)

            return dispatch(getEventByID_Event(dataEvents.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },
   getEventByUserID(id) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataEvents = await api.get(`/api/event/${id}/user`)

            return dispatch(getEventByUserID_Event(dataEvents.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));

         }
      }
   },
   getEventByUserIDAndTime(id, gte, lte) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataEvents = await api.get(`/api/event/${id}/${gte}/${lte}`)

            return dispatch(getEventByUserIDAndTime_Event(dataEvents.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },
   addEvent(title, content, date) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const newEvent = await api.post(`/api/event/`, {
               title,
               content,
               date
            });

            return dispatch(addEvent_Event(newEvent.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isModal_Auth(false))
            dispatch(isLoading_Auth(false));
         }
      }
   },
   updateEvent(id, title, content, date) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataEvents = await api.patch(`/api/event/${id}`, { title: title, content: content, date: date })

            return dispatch(updateEvent_Event(dataEvents.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },
   deleteEvent(id) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const deletedEvent = await api.delete(`/api/event/${id}`)

            return dispatch(deleteEvent_Event(deletedEvent.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },
   search(data) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));

            return dispatch(search_Event(data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   }
}
