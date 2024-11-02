import Heading from "../components/Heading";
import HeroBanner from "../components/HeroBanner";
import TabNav from "../components/TabNav";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "hoose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      ></Heading>
      <TabNav></TabNav>
    </div>
  );
};

export default Home;
