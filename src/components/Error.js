import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="error">
      <h1>Something went wrong</h1>
      <h2>
        {error.status} : {error.statusText}
      </h2>
    </div>
  );
};

export default Error;
