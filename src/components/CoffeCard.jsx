const CoffeCard = ({ coffeCard }) => {
  console.log(coffeCard);
  const { name, image, category, rating, origin, type, popularity } = coffeCard;
  return (
    <div className="card card-compact bg-slate-800 shadow-xl">
      <figure className="w-full h-48">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>Category: {category}</p>
        <p>Type: {type}</p>
        <p>Origin: {origin}</p>
        <p>Rating: {rating}</p>
        <p>Popularity: {popularity}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default CoffeCard;
