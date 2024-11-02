import { useLoaderData } from "react-router-dom";

const CoffeDetails = () => {
  const coffeDetails = useLoaderData();
  return (
    <div>
      <h1>Coffe Details</h1>
    </div>
  );
};

export default CoffeDetails;
