import React, { useState, useEffect } from "react";
import "../styles/app.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";

const App = () => {
  const [robot, setRobot] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobot(users));
  }, []);

  let onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredRobots = robot.filter((robots) =>
    robots.username.toLowerCase().includes(searchField.toLowerCase())
  );

  return !robot.length ? (
    <h1 className='tc v-mid f1'>Loading....</h1>
  ) : (
    <div className='tc'>
      <h1 className='f1'>RoboFreinds</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
