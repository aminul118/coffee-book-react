import { useLoaderData } from "react-router-dom";
import CoffeCard from "./CoffeCard";


const CoffeeCards = () => {
 const coffeCards=useLoaderData()


  
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-6 xl:gap-8">
         {
            coffeCards.map(coffeCard =><CoffeCard coffeCard={coffeCard}></CoffeCard>)
         }
           
        </div>
    );
};

export default CoffeeCards;