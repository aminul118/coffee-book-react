import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutrition from "../assets/nutrition.png";
const CoffeDetails = () => {
  const allCoffesdata = useLoaderData();
  const { id } = useParams();

  const [coffee, setCoffee] = useState({});
  useEffect(() => {
    const singleCoffeeData = allCoffesdata.find(
      (coffee) => coffee.id === parseInt(id)
    );
    setCoffee(singleCoffeeData);
  }, [allCoffesdata, id]);

  const { description, image, name, popularity, rating, making_process } =
    coffee;

  return (
    <div className="py-8 space-y-4">
      <h1 className="text-3xl font-semibold">{description}</h1>
      <img className="w-full rounded-lg" src={image} alt={description} />
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p>Popularity: {popularity}</p>
          <p>Rating: {rating}</p>
        </div>
        <div>
          <button className="btn btn-warning">Add Favorite</button>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Making Process</h1>
        <p>{making_process}</p>
      </div>
      <img src={nutrition} alt="" />
    </div>
  );
};

export default CoffeDetails;
