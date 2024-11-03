import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import CoffeCard from "./CoffeCard";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  const navigate = useNavigate();
  const coffeCards = useLoaderData();
  const { category } = useParams();
  // console.log(category);
  const [coffes, setCoffes] = useState([]);
  useEffect(() => {
    if (category) {
      const filterByCategory = [...coffeCards].filter(
        (coffeCard) => coffeCard.category === category
      );
      setCoffes(filterByCategory);
    } else {
      setCoffes(coffeCards.slice(0, 8));
    }
  }, [coffeCards, category]);

  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-6 xl:gap-8">
        {coffes.map((coffeCard) => (
          <CoffeCard key={coffeCard.id} coffeCard={coffeCard}></CoffeCard>
        ))}
      </div>
      <button
        className="btn btn-warning mt-4"
        onClick={() => navigate("/coffees")}
      >
        View All
      </button>
    </>
  );
};

export default CoffeeCards;
