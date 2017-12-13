# README FOR SGIN IN (Kiosk Simulation)
THIS IS FOR THE CSC583 FINAL PROJECT 



##

### 1. Objectives

##### 1. Design a checkin page for customers to check in on a tabelet device
##### 2. It needs to ask customers to input the following information
   *  NAME
   *  EMAIL
   *  PHONE NUMBER
   *  COMPANY
   *  IF IT IS OFFICIAL VISIT --[checkbox]
   *  IF NEEDS ESCORT--[checkbox]
   * ESCORT NAME IF NEEDS ESCORT
##### 3. It returns to the checkin page after filling out the information
###### 4. The URLs should be formated as:

 		HTTP://<-HOSTNAME>:<-PORT NUMBER>/<-API>/<-ENDPOINT>
    
    
##### 5.  Endpoint for admin login shall be provided
##### 6.  Table of checked-in customers shall be displayed for admin



### 2. Requirements



##### 1. Basic useful feature list:

 * Textboxes for text inputs
 * Submit button to submit information
 * return to checkin page after the submit button
 * Checkin page should be reponsive so to works correctly on tabel device

##### 2. Tools

 * Nodejs (Backend tools)
 * Mongodb (Database)
 * Express (Mange routing)
 * NPM	(Mange node packages and dependencies)
 * Postman (RestAPI testing)
 * Robo 3T (Mongodb management)
 * Handlebars (Frontend design)


### 3. Language and Tooling Evaluation

OPTIONS |Java/Spring | Python/Django|JS/MEAN | JS/MEN+HANDLEBAR|
------------|------------ | ------------|------------ | -------------
learning curve|  3  |   4  |  3  | 4
Usibility     |  4  |   5  |  4  | 4.5
Security      |  5  |   4.5 |  5  | 4.5
Features      |  4  |   5   |   5   | 5
Skills        |  3  |   2   |  3.5   | 3.5

Summary: MEN+HANDLEBAR is selected based on personal evaluation.


### 4. Plans
 Here is a list of my planned item to be done; if checked, it is done, else it is not.
 
 
 - [x] README.md
 - [x] Install Node.js and Node Package Manager
 - [x] Install Mongdb 
 - [x] Install dependencies: express, body-parser, etc.
 - [x] Endpoint(APIs design)
 - [x] Database collections and shema
 - [x] Server setup
 - [x] Responsive design for frontend
 - [x] Add login feature for admin to login
 - [x] Test repsonsive design using chrome deverlop tools

 
### 5. Installation
 










### Stuff used to make this:

 * [markdown-it](https://github.com/markdown-it/markdown-it) for Markdown parsing
 * [CodeMirror](http://codemirror.net/) for the awesome syntax-highlighted editor
 * [highlight.js](http://softwaremaniacs.org/soft/highlight/en/) for syntax highlighting in output code blocks
 * [js-deflate](https://github.com/dankogai/js-deflate) for gzipping of data to make it fit in URLs
