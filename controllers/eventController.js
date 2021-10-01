const categoryModel = require("../models/categoryModel");
const commentModel = require("../models/commentModel");
const likeModel = require("../models/likeModel");
const eventModel = require("../models/eventModel");

module.exports = {
 
   async getAllEvents(req, res) {
      try {
         const EventsData = await eventModel.getAllEvents();

         return res.json(EventsData)
      } catch (error) {
         res.send(`Error get all event!`);
      }
   }

   ,async geteventByID(req, res) {
      try {
         if (req.params.event_id >= 1) {
            const event_id = req.params.event_id;
            let event = await eventModel.geteventByID(event_id);

            return res.json(event[0]);
         } else {
            return res.send(`Error event id!`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error get event by id!`);
      }
   }

   ,async geteventByUserID(req, res) {
      try {
         if (req.params.user_id >= 1) {
            const user_id = req.params.user_id;
            const event = await eventModel.geteventByUserID(user_id);

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

   ,async getCommentByeventID(req, res) {
      try {
         const event_id = req.params.event_id;
         let comments = await commentModel.getCommentByeventID(event_id);

         return res.json(comments[0]);
      } catch (error) {
         console.log(error);
         res.send(`Error get comment by event id!`);
      }
   }

   ,async createComment(req, res) {
      try {
         if (req.body.content) {
            const event_id = req.params.event_id;
            const content = req.body.content;
            let autor = 0;

            if (req.user && req.user.id) {
               autor = req.user.id;
            }

            const createComment = await commentModel.createComment(event_id, autor, content);
            return res.send('Comment add!')
         } else {
            return res.send('Comment must be filled!');

         }
      } catch (error) {
         console.log(error);
         res.send(`Error comment!`);
      }
   }

   ,async getCategoriesByeventID(req, res) {
      try {
         const event_id = req.params.event_id;
         let categories = await categoryModel.getCategoriesByeventID(event_id);

         return res.json(categories[0]);
      } catch (error) {
         console.log(error);
         res.send(`Error get category by event id!`);
      }
   }
   ,async getAllLikeByeventID(req, res) {
      try {
         if (req.params.event_id >= 1) {
            const event_id = req.params.event_id;
            let likes = await likeModel.getAllLikeByeventID(event_id);

            return res.json(likes[0]);
         } else {
            return res.send(`Error event id!`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error get all like by event id!`);
      }
   }

   ,async createevent(req, res) {
      try {
         if (req.body.title && req.body.content && req.body.categories) {
            const { title, content, categories } = req.body;

            let id_author_event = 0;
            if (req.user?.id) {
               id_author_event = req.user.id;
            }

            const createevent = await eventModel.createevent(title, content, id_author_event);
            const event_id = createevent[0].insertId;

            let category = categories.split(` `);

            for (let i = 0; i < category.length; i++) {
               const createCategory = await categoryModel.createCategory(event_id, id_author_event, category[i]);
            }
            const event = await eventModel.geteventByID(event_id);

            return res.json(event[0][0]);
         } else {
            return res.send('Title, content and category must be filled!');
         }
      } catch (error) {
         console.log(error);
         res.send(`Error create event`);
      }
   }

   ,async addLike(req, res) {
      try {
         const event_id = req.params.event_id;

         let like_login = `people`;

         if (req.user && req.user.login) {
            like_login = req.user.login;
         }

         if (like_login !== `people`) {
            const checkLikeForevent = await likeModel.checkLikeForevent(event_id, like_login);

            if (checkLikeForevent[0].length > 0) {
               return res.send('I know you Liked!');;
            }
         }
         const addLike = await likeModel.addLike(event_id, like_login);
         return res.send('Liked!');

      } catch (error) {
         console.log(error);
         res.send(`Error 'bad like' :'(`);
      }

   }

   ,async updateeventByID(req, res) {
      try {
         if (req.params.event_id >= 1) {
            const eventAutorId = await eventModel.geteventByID(req.params.event_id);
            const event_id = req.params.event_id;
            const { title, content, category } = req.body;

            if (req.user.id == eventAutorId[0][0].id_author_event) {

               if (title) {
                  const updateTitleByID = await eventModel.updateTitleByID(event_id, title);
               }
               if (content) {
                  const updateContentByID = await eventModel.updateContentByID(event_id, content);
               }
               if (category) {
                  const updateCategoryByID = await categoryModel.updateCategoryByID(event_id, category);
               }

               return res.send(`event update!`);
            } else {
               return res.send(`Access is closed !`);
            }
         } else {
            return res.send(`Error event id!`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error update event!`);
      }
   }

   ,async deleteeventByID(req, res) {
      try {
         if (req.params.event_id >= 1) {
            const like_login = req.user.login;
            const event_id = req.params.event_id;
            const deletevent = await eventModel.deleteeventByID(event_id);
            const deleteLikeFormevent = await likeModel.deleteLikeFromeventByID(event_id, like_login);
            const deleteCommentByeventID = await commentModel.deleteCommentByeventID(event_id);
            // const deleteLikeFromComment = await likeModel.deleteLikeFromeventByID(event_id, like_login);//???
            const deleteCategory = await categoryModel.deleteCategoryByeventID(event_id);


            res.send(`Success deleted!`)
         } else {
            return res.send(`Error event id!`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error deleted!`)
      }
   }

   ,async deleteLikeFromeventByID(req, res) {
      try {
         if (req.params.event_id >= 1) {
            const event_id = req.params.event_id;
            const like_login = req.user.login;
            const deleteLikeFromeventByID = await likeModel.deleteLikeFromeventByID(event_id, like_login);

            return res.send(`Unliked`);
         } else {
            return res.send(`Error event id!`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error deleted like!`)
      }
   }
}
module.exports = new eventController();