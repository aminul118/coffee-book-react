import Heading from "../components/Heading";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "hoose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      ></Heading>
      {/* Categories Section */}
      <Categories categories={categories}></Categories>
      {/* Dynamic Nasted Components */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
