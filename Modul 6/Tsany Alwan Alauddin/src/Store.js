import React, {} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";

export default function Store() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/Outwear">Outwear</Link>
          </li>
          <li>
            <Link to="/Shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/Accessories">Accessories</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route path="/Outwear">
            <Outwear />
          </Route>
          <Route path="/Shoes">
            <Shoes />
          </Route>
          <Route path="/Accessories">
            <Accessories />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Outwear() {

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Outwear</h2>
      <ul>
        <li>
          <Link to={`${url}/Shirt Home, Shirt Away, Shirt 3rd`}>Male</Link>
        </li>
        <li>
          <Link to={`${url}/Shirt Home, Shirt Away, Shirt 3rd`}>Female</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select an item.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Shoes() {

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Shoes</h2>
      <ul>
        <li>
          <Link to={`${url}/Nike Phantom, Nike Mercurial, Nike Vapor`}>Nike</Link>
        </li>
        <li>
          <Link to={`${url}/Adidas Predator, Adidas Copa, Adidas Nemeziz`}>Adidas</Link>
        </li>
        <li>
          <Link to={`${url}/Puma EvoSpeed, Puma One, Puma Future`}>Puma</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select an item.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Accessories() {

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Accessories</h2>
      <ul>
        <li>
          <Link to={`${url}/Beanie, Bucket, Caps`}>Hat</Link>
        </li>
        <li>
          <Link to={`${url}/Long, Medium, Short`}>Scarves</Link>
        </li>
        <li>
          <Link to={`${url}/Black, White , Blue`}>Gloves</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select an item.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}