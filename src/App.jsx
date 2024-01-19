import ProjectsSlidebar from "./component/ProjectsSlidebar.jsx";
import NewProject from "./component/NewProject.jsx";
import NoProjectSelected from "./component/NoProjectSelected.jsx";
import { useState } from "react";


function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }


  console.log(projectsState);

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content =
      <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    // <NoProjectSelected onSartAddProject={handleStartAddProject} />;erreur de syntaxe

  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSlidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
