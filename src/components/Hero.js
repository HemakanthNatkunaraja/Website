import MyImg from '../assets/My11.png';
import {  AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: {
            title: 'Electrical & Electronic Enineering Undergraduate',
            description: 'I am a final-year undergraduate of the Faculty of Engineering, University of Jaffna. I am reading for a BSc. (Hons.) Degree in Electrical & Electronic Enineering Undergraduate.'

        },
        social: {
            github: 'https://github.com/HemakanthNatkunaraja/',
            facebook: 'https://web.facebook.com/hemakanth.natkunarajah',
            linkedin: 'https://www.linkedin.com/in/hemakanth-natkunaraja-232aa2245/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col justify-center '>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> I'm <span className='text-black'>Hemakanth</span>
                <p className='text-black text-6xl font-hero-font'>{config.subtitle.title}</p>
                <p className='text-2xl'>{config.subtitle.description}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3 h-1/4 ' src={MyImg} />
    </section>
}

