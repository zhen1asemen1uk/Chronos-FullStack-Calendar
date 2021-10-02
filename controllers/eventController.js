const eventModel = require("../models/eventModel");
const moment = require('moment');
const mongoose = require('mongoose');

module.exports = {

   async getAllEvents(req, res) {
      try {
         const EventsData = await eventModel.getAllEvents();

         return res.json(EventsData)
      } catch (error) {
         res.send(`Error get all event!`);
      }
   }

   , async getEventByID(req, res) {
      try {
         const event_id = req.params.event_id;
         console.log(event_id);
         let event = await eventModel.getEventByID(event_id);
         console.log(event);

         return res.json(event);
      } catch (error) {
         console.log(error);
         res.send(`Error get event by id!`);
      }
   }

   , async getEventByUserID(req, res) {
      try {
         if (req.params.user_id >= 1) {
            const user_id = req.params.user_id;
            const event = await eventModel.getEventByUserID(user_id);

            for (const key in event[0]) {
               delete event[0][key].password
               delete event[0][key].activationLink
               delete event[0][key].verify
               delete event[0][key].status
               delete event[0][key].avatar
               delete event[0][key].email
            }

            return res.json(event[0]);
         } else {
            return res.send(`Error event id!`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error get event by id!`);
      }
   }

   // ,async getCategoriesByEventID(req, res) {
   //    try {
   //       const event_id = req.params.event_id;
   //       let categories = await categoryModel.getCategoriesByEventID(event_id);

   //       return res.json(categories[0]);
   //    } catch (error) {
   //       console.log(error);
   //       res.send(`Error get category by event id!`);
   //    }
   // }

   , async createEvent(req, res) {
      try {
         if (req.body.title && req.body.content && req.body.date) {
            const { title, content, date } = req.body;
            let id_author_event = req.user?.id;

            let dateFormat = moment(date, "DD MM YYYY").format()

            const createEvent = await eventModel.createEvent(title, content, dateFormat, id_author_event);
            console.log(createEvent);
            let lastEvent = createEvent.events.pop();

            return res.json(lastEvent);
         } else {
            return res.send('Title, content and category must be filled!');
         }
      } catch (error) {
         console.log(error);
         res.send(`Error create event`);
      }
   }

   , async updatEventByID(req, res) {
      try {
         const eventAutorId = await eventModel.getEventByID(req.params.event_id);
         const event_id = req.params.event_id;
         const { title, content, date } = req.body;

         if (req.user.id === eventAutorId[0].id) {

            if (title) {
               const updateTitleByID = await eventModel.updateTitleByID(event_id, title);
            }
            if (content) {
               const updateDescriptionByID = await eventModel.updateDescriptionByID(event_id, content);
            }
            if (date) {
               const updateDateByID = await eventModel.updateDateByID(event_id, date);
            }

            return res.send(`Event update!`);
         } else {
            return res.send(`Access is closed !`);
         }

      } catch (error) {
         console.log(error);
         res.send(`Error update event!`);
      }
   }

   , async deletEventByID(req, res) {
      try {
         const event_id = req.params.event_id;
         const deletEvent = await eventModel.deletEventByID(event_id);

         res.send(`Success deleted!`)
      } catch (error) {
         console.log(error);
         res.send(`Error deleted!`)
      }
   }

}