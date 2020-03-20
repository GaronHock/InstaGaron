# README

[InstaGaron]  (https://instagaron.herokuapp.com)
InstaGaron is a social media web app that allows users to upload photos and profile pictures.
## Technology

* [RubyOnRails]
* [PostgreSQL]
* [React]
* [Redux]
* [AmazonWebServices]
* [Jbuilder]

The web app utilizes ruby on rails and the gem BCrypt specifically for the backend.
This allows the user to create an account with a password that is hashed and 
salted, said password is not saved on the database. Database constaints are used 
to make sure a user is never missing anything that is not needed, thisc provides
extra security.Session tokens were used to persist user logins even if the user 
navigated away from the page.The frontend was implemented through react and redux.
React is used to render data to the Document Object Model. Redux was used 
alongside this to manage the state of the app. Jbuilder was used alongside redux 
to pass data along to the front end for the user.


















<!-- This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
