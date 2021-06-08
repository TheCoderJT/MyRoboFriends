import React, { useState, useEffect } from "react";
import "./app.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField } from "../store/reducer-actions/searchInput/actions.js";
import { requestRobots } from "../store/reducer-actions/getRobots/actions.js";
import { useDispatch, useSelector } from "react-redux";

const App = (props) => {
  const dispatch = useDispatch();
  const { searchField } = useSelector((state) => state.searchInput);
  const { robots, isPending, error } = useSelector((state) => state.getRobots);

  useEffect(() => {
    onRequestRobots();
  }, []);

  let onSearchChange = (e) => {
    dispatch(setSearchField(e.target.value));
  };

  const onRequestRobots = () => {
    dispatch(requestRobots());
  };

  const filteredRobots = robots.filter((robots) =>
    robots.username.toLowerCase().includes(searchField.toLowerCase())
  );

  return isPending ? (
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
