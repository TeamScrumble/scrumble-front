import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { rowid } = useParams();
  // project detail에 대한 fetch가 필요함
  return (
    <div className="flex justify-center">
      <h1>{`Project #${rowid}`}</h1>
    </div>
  );
};

export default Dashboard;