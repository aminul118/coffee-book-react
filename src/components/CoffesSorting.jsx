const CoffesSorting = () => {
  return (
    <div className="flex justify-between items-center py-8">
      <div>
        <h2 className="text-3xl">Sort Coffee's by Popularity & Rating</h2>
      </div>
      <div>
        <button className="btn btn-warning mr-3">Sort By Popularity</button>
        <button className="btn btn-warning">Sort By Rating</button>
      </div>
    </div>
  );
};

export default CoffesSorting;
