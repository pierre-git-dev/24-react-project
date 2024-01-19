import Button from './CustomButton.jsx';
import NewProject from './NewProject.jsx';

export default function ProjectsSlidebar({ onStartAddProject, projects }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Projets</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    ajouter un projet
                </Button>
            </div>
            <ul className='mt-8'>
                {projects.map((project) => <li key={project.id}>
                    <button className='w-full text-left px-8 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800'>
                        {project.title}
                    </button>
                </li>)}
            </ul>
        </aside>
    )
}
