# MERN-boilerplate

This is a boilerplate project using the following technologies:
- [React](https://facebook.github.io/react/) and [React Router](https://reacttraining.com/react-router/) for the frontend
- [Express](http://expressjs.com/) and [Mongoose](http://mongoosejs.com/) for the backend
- [Sass](http://sass-lang.com/) for styles (using the SCSS syntax)
- [Webpack](https://webpack.github.io/) for compilation


## Requirements

- [Node.js](https://nodejs.org/en/) 6+

```shell
npm install
```


## Running
- Fork & Clone
- cd into `MERN-boilerplate`
- Run `npm install`
- Create `config.js` file inside config folder
- Inside `config.js` copy and paste 
```
module.exports = {
    db: 'mongodb://username:password@url:port/db',
    db_dev: 'mongodb://localhost:27017/login_demo_db',
  };
```
  
- Run `npm run start:dev` for development (webpack dev server) mode 
- Go to `localhost:8080`
