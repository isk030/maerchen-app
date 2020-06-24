
#maerchen-app

  
  
  

This is my first Node.js project, which crawls german tales from https://www.maerchen.com and providing them with express in RESTful API manner.

Its a simple app for searching and reading tales

  

----------

##Installation

  

My Project uses ES6 code style so you need to ``` node -r esm ./server.js ```

I scripted nodemon with``` npm start```

----------

  
  

##Architecture

  

Modules:

![Architecture](https://github.com/isk030/maerchen-app/raw/master/m%C3%A4rchen-app-arch.png)

  

Application Flow:

  

```mermaid

graph TD

A[Host Server and listen] --> B[Connect to DB]

B --> C{Enough tales in DB?}

C --Yes--> D[Wait for request]

C --No--> E[Crawl remaining tales]

E --> D

```

  

Communication Flow:

  

```mermaid

sequenceDiagram

Note left of Client: Initial Load

  

Client->Server: Requesting Html, Js and all tales

Server->Client: Providing Html, Js and all tales

  

Note left of Client: User Signup

Client->Server: Sending Credentials

Server->Client: Status response

  

Note left of Client: Login User

Client->Server: Credentials sent

Server->Client: Validation and Delivering token

Client->Server: Request favourite tales with token

Server->Client: Favourite Tales sent

  

Note left of Client: Update Favourites

Client->Server: Favourite tales list sent with token

Server->Client: Status response

```

  
  

----------

Avaiable Endpoints

-------------

``` GET: /tale```

Delivers all Tales

  

Response:

```json

{

"count": 373,

"tales": [

{

"_id": "5edb8b41e60f490bf0c644e7",

"title": "Der Froschkönig oder der eiserne Heinrich",

"author": "Jacob Grimm (1785-1863),

"content": "In  den  alten  Zeiten[..],

"url": "https://maerchen.com/grimm/der-froschkoenig.php"

}

]

}

```

  
  

----------

  
  

``` POST: /user/signup```

Signing up new User

  

Request:

```json

{

"email": "example@gmail.com",

"password": "password"

}

```

Response:

```json

{

"message": "User created"

}

```

  

----------

``` POST: /user/login```

Login in an user

  

Request:

```json

{

"email": "example@gmail.com",

"password": "password"

}

```

Response:

```json

{

"message": "Auth successful",

"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlzazAzMEBnbWFpbC5jb20iLCJ1c2VySWQiOiI1ZWU5ZjVhMGM5ZGFhMjBmYTg1MjdiNGEiLCJpYXQiOjE1OTMwMDY1MjksImV4cCI6MTU5MzAxMDEyOX0.FQ28okybq35_YNWRZmiYI4eP8YOCgX1P29J1Z8FAAys",

"_id": "5ee9f5a0c9daa20fa8527b4a",

"favs": [

"5edb8b41e60f490bf0c644e7"

]

}

```

  

``` PATCH: /user/<userId>```

Login in an user

  

Request with Authorization Header carrying login token

```json

{

"favs": [

"<taleId>",

"<taleId>"

]

}

```

Response:

```json

{

"message": "favs updated"

}

```
