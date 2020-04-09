import React from "react";
import { Route, Switch, Link, Redirect} from 'react-router-dom';
import UserList from '../User/UserList';
import Photo from '../Photo/Photo';
import Comment from '../Comment/Comment';
import Post from '../Post/Post';
import "./App.css";

const App = () => {
  return (
    <div>
    <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/user">UserList</Link>
            </li>
            <li>
              <Link to="/post">Post</Link>
            </li>
            <li>
              <Link to="/comment">Comment</Link>
            </li>
            <li>
              <Link to="/photo">Photo</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/user" component={UserList} />
        <Route path="/post/" component={Post} />
        <Route path="/comment" component={Comment} />
        <Route path="/photo/" component={Photo} />
        <Redirect to="/user" />
      </Switch>
    </div>
  );
};

export default App;
