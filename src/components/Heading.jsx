const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center space-y-2 py-8">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Heading;
