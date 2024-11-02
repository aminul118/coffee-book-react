import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted py-8">
      {categories.map((category) => (
        <NavLink
          to="/category/${category.category}"
          role="tab"
          className={({ isActive }) =>
            `${isActive ? "tab-active" : ""} tab text-2xl font-thin `
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;

{
  /* <Link role="tab" className="tab tab-active">
        Tab 2
      </Link> */
}
