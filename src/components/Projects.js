import websiteImg1 from '../assets/Network_cisco.png';
import websiteImg2 from '../assets/2.png';
import websiteImg3 from '../assets/3.png';


export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'Computer_Network_configuration using Ciscopaket tracer',
                link: 'https://github.com/HemakanthNatkunaraja/Computer_Network_configuration'
            },
            {
                image: websiteImg2,
                description: 'PID_controlerDesign_in_LTSPICE_Project',
                link: 'https://github.com/HemakanthNatkunaraja/PID_controlerDesign_in_LTSPICE_Project'
            },
            {
                image: websiteImg3,
                description: 'Simulation Feedback diversity of wireless communication',

                link: 'https://github.com/HemakanthNatkunaraja/Simulation_Feedback_diversity'
            }
          
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}