# CRUDpost
Uplink Talent accessment


This README file will work you through the use of the API


To register a new user

(bloglink)/user/Register     POST REQUEST

and send in a json body object    

{

  "name": "",
  
  "email": "",
  
  "password": ""

}

To login a user

(bloglink)/user/login    POST REQUEST

and send in a json body object

{

  "email": "",
  
  "password": ""

}


To get all the notes in the database go to

(bloglink)/notes/allnotes      GET REQUEST

*To get a note by title go to *

(bloglink)/notes/(title of your note)       GET REQUEST


To get user information go to

(bloglink)/user/getuser   GET REQUEST

and send in a json body object

{

  "email": "your registration email"

}



To create a notes go to

(bloglink)/notes/ (your user id from the database(to authenticate a user) /write       POST REQUEST

and send in a json body object

{

  "title": "",
  
  "note": ""

}

to update a note go to 

(bloglink)/notes/ (your user id from the database(to authenticate a user) / the id of the post you want to update    PATCH REQUEST  

and send in a json body object


to delete a note go to

(bloglink)/notes/ (your user id from the database(to authenticate a user) / the id of the post you want to update     DELETE REQUEST



PLEASE REACH OUT TO ME ON AYOMIDEVICTOR271@GMAIL.COM for further inquires about API use.




