import { useParams } from "react-router-dom";

const Backlog = () => {
  const { projectRowid } = useParams();
  // project detail에 대한 fetch가 필요함
  return (
    <div className="flex justify-center">
      <h1>{`Project #${projectRowid}`}</h1>
    </div>
  );
};

export default Backlog;
