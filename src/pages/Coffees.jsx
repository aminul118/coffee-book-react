import { useLoaderData } from "react-router-dom";
import CoffeCard from "../components/CoffeCard";
import CoffesSorting from "../components/CoffesSorting";


const Coffees = () => {
    const coffesData =useLoaderData()

    return (
      <>
      <CoffesSorting></CoffesSorting>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-6 xl:gap-8">
          {coffesData.map((coffeCard) => (
            <CoffeCard key={coffeCard.id} coffeCard={coffeCard}></CoffeCard>
          ))}
        </div>
      </>
    );
};

export default Coffees;