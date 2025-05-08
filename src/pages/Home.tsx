import { useQuery } from '@tanstack/react-query';
import { fetchProject, FetchProjectResponse } from '../api/project';

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['project'],
    queryFn: fetchProject,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error instanceof Error) return <div>에러 발생: {error.message}</div>;
  
  return (
    <div className="h-screen flex justify-center align-middle">
      <h1>Home</h1>
      <ul>
      {data?.map((project: FetchProjectResponse) => (
        <li key={project.rowid}>{project.title}</li>
      ))}
    </ul>
    </div>
  )
}

export default Home