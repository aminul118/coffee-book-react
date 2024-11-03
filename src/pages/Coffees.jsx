import { useLoaderData } from "react-router-dom";
import CoffeCard from "../components/CoffeCard";
import { useState } from "react";

const Coffees = () => {
  const coffesData = useLoaderData();
  const [coffes, setCoffes] = useState(coffesData);
  const handleSort = (sortBy) => {
    if (sortBy == "popularity") {
      const sorted = [...coffesData].sort(
        (a, b) => b.popularity - a.popularity
      );
      setCoffes(sorted);
    } else if (sortBy == "rating") {
      const sorted = [...coffesData].sort((a, b) => b.rating - a.rating);
      setCoffes(sorted);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center py-8">
        <div>
          <h2 className="text-3xl">Sort Coffee's by Popularity & Rating</h2>
        </div>
        <div>
          <button
            onClick={() => {
              handleSort("popularity");
            }}
            className="btn btn-warning mr-3"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => {
              handleSort("rating");
            }}
            className="btn btn-warning"
          >
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-6 xl:gap-8">
        {coffes.map((coffeCard) => (
          <CoffeCard key={coffeCard.id} coffeCard={coffeCard}></CoffeCard>
        ))}
      </div>
    </>
  );
};

export default Coffees;
