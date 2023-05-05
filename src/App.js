import React, { useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const INITIAL_C0STS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: "Fridge",
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    description: "Laptop",
    amount: 1099.99,
  },
  {
    id: 'c3',
    date: new Date(2021, 11, 25),
    description: "Clothes",
    amount: 130,
  },
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_C0STS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      console.log(cost);
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
