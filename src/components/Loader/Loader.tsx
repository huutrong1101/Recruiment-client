import spinner from "../../../images/spinner.svg";

const Loader = () => {
  return (
    <div className="Loader">
      <div className="flex justify-center">
        <img src={spinner} alt="loader" className="h-20 w-20" />
      </div>
    </div>
  );
};

export default Loader;
