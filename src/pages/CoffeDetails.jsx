import { useLoaderData, useParams } from "react-router-dom";

const CoffeDetails = () => {
  const {id}=useParams()
  console.log(id);
const data =useLoaderData()

 
  return (
    <div>
      <h1>Coffe Details</h1>
    
    </div>
  );
};

export default CoffeDetails;
