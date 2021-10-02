import api from '.'
import { isLoading_Auth } from '../reducers/authReducer/authReducer';
import {
   addEvent_Event,
   deleteEvent_Event,
   getAllEvents_Event,

   search_Event,
   updateEvent_Event,
   getEventByID_Event,
   getEventByUserID_Event,
} from '../reducers/eventReducer/eventReducer';

export const eventAPI = {
   getAllEvents(page, size) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataEvents = await api.get(`/api/Events`);

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
            const dataEvents = await api.get(`/api/Events/${id}`)

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
            const dataEvents = await api.get(`/api/Events/${id}/user`)

            return dispatch(getEventByUserID_Event(dataEvents.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));

         }
      }
   },


   addEvent(title, content, categories) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const newEvent = await api.Event(`/api/Events/`, {
               title,
               content,
               categories
            });
            return dispatch(addEvent_Event(newEvent.data));
         } catch (error) {
            console.log(error);
         } finally {
            dispatch(isLoading_Auth(false));
         }
      }
   },


   updateEvent(id, title, content, categories) {
      return async (dispatch) => {
         try {
            dispatch(isLoading_Auth(true));
            const dataEvents = await api.patch(`/api/Events/${id}`, { title: title, content: content, categories: categories })

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
            const deletedEvent = await api.delete(`/api/Events/${id}`)

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
