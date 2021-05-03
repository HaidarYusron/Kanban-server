Kanban 
`POST/register`
`POST/login`
`POST/tasks/`
`GET/tasks/`
`PUT/tasks/:id`
`DELETE/tasks/:id`
`PATCH/tasks/:id`
`GET/tasks/:id`

#####Register#####

Register user data

URL

/register

Method:

POST

URL Params

Required:

None

Data Params
  `"email": "<email to get insert into>"`
  `"password": "<password to get insert into>"`

Success Response:

Code: 201
Content: {
    "id": 6,
    "email": "saf@mail.com"
}

Error Response:

Code: 500 
Content: { error : "Internal Server Error!" }

OR

Code: 401 UNAUTHORIZED
Content: { error : "Email address already in use!" }


#####Login#####

Login user data

URL

/login

Method:

POST

URL Params

Required:

None

Data Params

 `"email": "<email to get insert into>"`
  `"password": "<password to get insert into>"`

Success Response:

Code: 200
Content: {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJzYWZAbWFpbC5jb20iLCJpYXQiOjE2MTc3MTMwNDl9.yw6cbmOg-vHtl3t2gQuTLE4PqCxiM9ScYZ6odbAmoKY"
}

Error Response:

Code: 500 
Content: { error : "Internal Server Error!" }

OR

Code: 404 NOT FOUND
Content: {message: 'email/password not found'}

#####Post Task#####

Create json data about a user task.

URL

/tasks/

Method:

POST

URL Params

Required:

None

Headers 
`{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJzYWZAbWFpbC5jb20iLCJpYXQiOjE2MTc3MTMwNDl9.yw6cbmOg-vHtl3t2gQuTLE4PqCxiM9ScYZ6odbAmoKY"
}`

Data Params 

None

Success Response:

Code: 200
Content: {
    "id": 9,
    "title": "Buat client kanban",
    "category": "backlog",
    "UserId": 6,
    "updatedAt": "2021-04-06T22:57:12.931Z",
    "createdAt": "2021-04-06T22:57:12.931Z"
}

Error Response:

Code: 500 
Content: { error : "Internal Server Error!" }

OR

Code: 401 UNAUTHORIZED
Content: {message: 'Unauthorized'}

OR

Code: 500 
Content: {message: 'Please Login First'}

OR

code: 500
content: {message: "Invalid Token Access!"}

######Show Task#######

Return json data about a user task.

URL

/tasks/

Method:

GET

URL Params

Required:

None

Headers 
`{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJzYWZAbWFpbC5jb20iLCJpYXQiOjE2MTc3MTMwNDl9.yw6cbmOg-vHtl3t2gQuTLE4PqCxiM9ScYZ6odbAmoKY"
}`

Data Params 

None

Success Response:

Code: 200
Content: [ {
        "id": 8,
        "title": "Belajar bikin styling 2",
        "category": "done",
        "createdAt": "2021-04-06T14:23:14.125Z",
        "updatedAt": "2021-04-06T14:23:14.125Z",
        "UserId": 8
    },
    {
    "id": 9,
    "title": "Buat client kanban",
    "category": "backlog",
    "UserId": 6,
    "updatedAt": "2021-04-06T22:57:12.931Z",
    "createdAt": "2021-04-06T22:57:12.931Z"
}]

Error Response:

Code: 500 
Content: { error : "Internal Server Error!" }

OR

Code: 401 UNAUTHORIZED
Content: {message: 'Unauthorized'}

OR

Code: 500 
Content: {message: 'Please Login First'}

OR

code: 500
content: {message: "Invalid Token Access!"}

#####Delete Task#####

delete json data user.

URL

/tasks/:id

Method:

DELETE

URL Params
    
 Required:
 
 id=[integer]

Data Params 

None

Headers 
`{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJzYWZAbWFpbC5jb20iLCJpYXQiOjE2MTc3MTMwNDl9.yw6cbmOg-vHtl3t2gQuTLE4PqCxiM9ScYZ6odbAmoKY"
}`

Success Response:

Code: 200
Content: 'Succesfully delete'

Error Response:

Code: 500 
Content: { error : "Internal Server Error!" }

OR

Code: 401 UNAUTHORIZED
Content: {message: 'Unauthorized'}

OR

Code: 500 
Content: {message: 'Please Login First'}

OR

code: 500
content: {message: "Invalid Token Access!"}

#####Put Task#####

update json title data user.

URL

/tasks/:id

Method:

PUT

URL Params
    
 Required:
 
 id=[integer]

Data Params 
` "title": "<title to get insert into>" `,
` "description": "<description to get insert into>" `

Headers 
`{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJzYWZAbWFpbC5jb20iLCJpYXQiOjE2MTc3MTMwNDl9.yw6cbmOg-vHtl3t2gQuTLE4PqCxiM9ScYZ6odbAmoKY"
}`

Success Response:

Code: 200
Content: [
    {
        "id": 10,
        "title": "Buat client kanban 2",
        "category": "backlog",
        "createdAt": "2021-04-06T23:40:07.710Z",
        "updatedAt": "2021-04-07T00:05:45.782Z",
        "UserId": 6
    }
]

Error Response:

Code: 500 
Content: { error : "Internal Server Error!" }

OR

Code: 401 UNAUTHORIZED
Content: {message: 'Unauthorized'}

OR

Code: 500 
Content: {message: 'Please Login First'}

OR

code: 500
content: {message: "Invalid Token Access!"}

#####Patch Task#####

update json category data user.

URL

/tasks/:id

Method:

PATCH

URL Params
    
 Required:
 
 id=[integer]

Data Params 
` "title": "<title to get insert into>"`,

Headers 
`{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJzYWZAbWFpbC5jb20iLCJpYXQiOjE2MTc3MTMwNDl9.yw6cbmOg-vHtl3t2gQuTLE4PqCxiM9ScYZ6odbAmoKY"
}`

Success Response:

Code: 200
Content: [
    {
        "id": 10,
        "title": "Buat client kanban 2",
        "category": "doing",
        "createdAt": "2021-04-06T23:40:07.710Z",
        "updatedAt": "2021-04-07T00:05:45.782Z",
        "UserId": 6
    }
]

Error Response:

Code: 500 
Content: { error : "Internal Server Error!" }

OR

Code: 401 UNAUTHORIZED
Content: {message: 'Unauthorized'}

OR

Code: 500 
Content: {message: 'Please Login First'}

OR

code: 500
content: {message: "Invalid Token Access!"}

######Show Task#######

Return json data about a user task.

URL

/tasks/

Method:

GET

URL Params

 Required:
 
id=[integer]

Required:

None

Headers 
`{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJzYWZAbWFpbC5jb20iLCJpYXQiOjE2MTc3MTMwNDl9.yw6cbmOg-vHtl3t2gQuTLE4PqCxiM9ScYZ6odbAmoKY"
}`

Data Params 

None

Success Response:

Code: 201
Content: s {
        "id": 8,
        "title": "Belajar bikin styling 2",
        "category": "done",
        "createdAt": "2021-04-06T14:23:14.125Z",
        "updatedAt": "2021-04-06T14:23:14.125Z",
        "UserId": 8
    }


Error Response:

Code: 500 
Content: { error : "Internal Server Error!" }

OR

Code: 401 UNAUTHORIZED
Content: {message: 'Unauthorized'}

OR

Code: 500 
Content: {message: 'Please Login First'}

OR

code: 500
content: {message: "Invalid Token Access!"}