import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div className="h-[100vh]">
      <Helmet>
        <title>Bistro | Dashboard</title>
      </Helmet>
      <div className="flex justify-center items-center h-full">
        <h1 className="text-2xl font-semibold">This is dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard
