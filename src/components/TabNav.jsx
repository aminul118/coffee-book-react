import { Link } from "react-router-dom";

const TabNav = () => {
    return (
      <div role="tablist" className="tabs tabs-lifted">
        <Link role="tab" className="tab">
          Tab 1
        </Link>
        <Link role="tab" className="tab tab-active">
          Tab 2
        </Link>
        <Link role="tab" className="tab">
          Tab 3
        </Link>
      </div>
    );
};

export default TabNav;