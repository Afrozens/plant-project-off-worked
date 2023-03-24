import { Link} from "react-router-dom";

const ErrorPage = () => {
  return <div className="flex flex-col justify-center items-center mx-auto my-0 bg-slate-100 h-screen">
    <img src="https://i.imgur.com/UUZcDpI.gif" alt="plant gif crash in laptop" />
    <h2 className="text-2xl font-bold tracking-widest uppercase">Error 404</h2>
    <Link to="/" className="text-xl font-semibold text-lime-600 hover:underline">Try Again</Link>
  </div>;
};

export default ErrorPage;
