const dbConnection = require("../db/dbConnection");
const userSchema = require("./schema/userSchema");

module.exports ={
   async getAllEvents() {
      return await userSchema.find();
      return await dbConnection.getConnection(`
      SELECT * FROM users INNER JOIN Events ON users.id=Events.id_author_Event ORDER BY 6 DESC;`);
   }

   ,async getEventByID(id) {
      return await dbConnection.getConnection(`
      SELECT * FROM Events WHERE id=${id};`);
   }

   ,async getEventByUserID(id) {
      return await dbConnection.getConnection(`
      SELECT * FROM users INNER JOIN Events ON users.id=Events.id_author_Event WHERE id_author_Event=${id};`);
   }

   ,async createEvent(title_Event, content_Event, id_author_Event) {
      return await dbConnection.getConnection(`
      INSERT INTO Events (title_Event, content_Event,id_author_Event)
      VALUES ('${title_Event}', '${content_Event}','${id_author_Event}');`);
   }

   ,async updateTitleByID(Event_id, title_Event) {
      return await dbConnection.getConnection(`
      UPDATE Events SET title_Event='${title_Event}' WHERE id='${Event_id}';`);
   }
   ,async updateDescriptionByID(Event_id, content_Event) {
      return await dbConnection.getConnection(`
      UPDATE Events SET content_Event='${content_Event}' WHERE id='${Event_id}';`);
   }

   ,async deleteEventByID(Event_id) {
      return await dbConnection.getConnection(`
      DELETE FROM Events WHERE id=${Event_id};`);
   }

}
module.exports = new EventModel();