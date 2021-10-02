const userSchema = require("./schema/userSchema");

module.exports = {
   async getAllEvents() {
      return await userSchema.find({ $all: { events: 1 } }, {
         login: 0, avatar: 0,
         email: 0, status: 0,
         verify: 0, createdAt: 0,
         _id: 0, password: 0,
         activationLink: 0, tokens: 0
      });
   }

   , async getEventByID(id) {
      return await userSchema.find({
         events: { $elemMatch: { _id: id } }
      });
   }

   , async getEventByUserID(user_id) {
      const events = await userSchema.find({ _id: user_id }, { events: 1, _id: 0 });
      return events[0].events
   }

   , async createEvent(title_Event, content_Event, date, id_author_Event) {
      await userSchema.findByIdAndUpdate({ _id: id_author_Event }, {
         $push: {
            events: {
               title: title_Event,
               desc: content_Event,
               date: date
            }
         }
      });
      return await userSchema.findById({ _id: id_author_Event });
   }

   , async updateTitleByID(event_id, title_event) {
      return await userSchema.findOneAndUpdate({
         events: {
            $elemMatch: { _id: event_id }
         }
      }, {
         $set: { "events.$.title": title_event }
      })
   }
   , async updateDescriptionByID(event_id, content_event) {
      return await userSchema.findOneAndUpdate({
         events: {
            $elemMatch: { _id: event_id }
         }
      }, {
         $set: { "events.$.desc": content_event }
      })
   }
   , async updateDateByID(event_id, date_event) {
      return await userSchema.findOneAndUpdate({
         events: {
            $elemMatch: { _id: event_id }
         }
      }, {
         $set: { "events.$.date": date_event }
      })
   }

   , async deletEventByID(event_id) {
      return await userSchema.findOneAndUpdate({
         events: { $elemMatch: { _id: event_id } }
      },
         { $pull: { events: { _id: event_id } } })
   }
   // ,createCategory!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
