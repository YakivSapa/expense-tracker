// import CostItem from "./components/CostItem";
import Costs from "./components/Costs/Costs";

function App() {

  const costs = [
    {
      date: new Date(2022, 2, 12),
      description: "Fridge",
      amount: 1000
    },
    {
      date: new Date(2022, 11, 25),
      description: "Laptop",
      amount: 1099.99
    },
    {
      date: new Date(2022, 11, 25),
      description: "Clothes",
      amount: 130
    },
  ];
  return (
    // <div>
    //   <h1>Let's start learning React!</h1>
    //   <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount} />
    //   <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount} />
    //   <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount} />
    // </div>
    <div>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
