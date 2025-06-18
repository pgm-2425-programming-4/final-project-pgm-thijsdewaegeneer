import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { fetchProjects } from "../api/projects/FetchProjects";

function Navigation() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  const projects = data?.data || [];

  return (
    <nav className="header__navigation">
      <Link className="header__navigation-item" to="/">HOME</Link>

      <div className="header__navigation-list">
        <h2 className="header__navigation-list-title">PROJECTS</h2>
        {isLoading && <p>Loading projects...</p>}
        {isError && <p>Error loading projects: {error.message}</p>}

        <ul className="header__navigation-list-items">
          {projects.map(project => (
            <li key={project.id} className="header__navigation-list-item">
              <Link to={`/projects/${project.documentId}`}>
                {project.Title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="header__navigation-list-title">INFO</h2>
      <Link className="header__navigation-item" to="/about">ABOUT</Link>
    </nav>
  );
}

export default Navigation;