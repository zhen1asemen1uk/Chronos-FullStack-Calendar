# chronos

    must be:    /.env
    in .env:
              HOST=http://localhost:
              PORT=5000

              API_URL=http://localhost:5000
              CLIENT_URL=http://localhost:3000

              JWT_ACCESS_SECRET=...
              JWT_REFRESH_SECRET=...

              SMTP_HOST=smtp...
              SMTP_PORT=465
              SMTP_USER=...@....com
              SMTP_PASSWORD=...

              DB_PASSWORD=...
              DB_LOGIN=db_chronos


    must be:    /.client/env
    in .env:
               REACT_APP_HOST = http://localhost:5001

#For start:

      npm i (Install the module separately in the server folder and in the client folder)

      npm run dev - start server and client

# What can the calendar do at the moment?

    - register users
    - confirmation of the user's mail
    - recover passwords if necessary
    - show calendar
    - create events (with a special button or double-click on a specific date)
    - update event data (date, title, description)
    - delete events
