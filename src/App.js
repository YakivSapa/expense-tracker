// import CostItem from "./components/CostItem";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

function App() {

  const costs = [
    {
      id: 'c1',
      date: new Date(2022, 2, 12),
      description: "Fridge",
      amount: 1000
    },
    {
      id: 'c2',
      date: new Date(2022, 11, 25),
      description: "Laptop",
      amount: 1099.99
    },
    {
      id: 'c3',
      date: new Date(2022, 11, 25),
      description: "Clothes",
      amount: 130
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('App Component');
  };

  return (
    // <div>
    //   <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount} />
    //   <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount} />
    //   <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount} />
    // </div>
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
