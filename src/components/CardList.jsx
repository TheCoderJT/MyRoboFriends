import React from "react";
import Card from "./Card";

const CardList = ({ id, name, email, robots }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {robots.map((user, i) => {
        return (
          <Card
            id={robots[i].id}
            name={robots[i].username}
            email={robots[i].email}
            key={robots[i].id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
