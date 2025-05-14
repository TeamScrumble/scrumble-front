interface ProjectProfileProps {
  url: string | null
  title: string
}

const ProjectProfile: React.FC<ProjectProfileProps> = ({url, title}) => {
  return (
    <div className="flex items-center justify-center w-11 h-11 rounded-[6px] bg-amber-600 hover:bg-amber-700 overflow-hidden text-sm font-medium cursor-pointer">
      {url ? (
        <img src={url} alt={title} className="w-full h-full object-cover" />
      ) : (
        <span>{title.charAt(0).toUpperCase()}</span>
      )}
    </div>
  )
}

export default ProjectProfile