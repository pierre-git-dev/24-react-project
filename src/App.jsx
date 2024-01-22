import ProjectsSlidebar from "./component/ProjectsSlidebar.jsx";
import NewProject from "./component/NewProject.jsx";
import NoProjectSelected from "./component/NoProjectSelected.jsx";
import { useState } from "react";
import SelectedProject from "./component/SelectedProject.jsx";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    });

  }

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

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;


  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content =
      <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    // <NoProjectSelected onSartAddProject={handleStartAddProject} />;erreur de syntaxe

  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSlidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );


 function handleDeleteProject (){
  console.log("ondelete")
  setProjectsState((prevState) =>
   {
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId
      ),
    };
  });
}
}
export default App;
