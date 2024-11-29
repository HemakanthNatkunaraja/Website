import {  AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";


export default function Contact () {

    const config = {
        email : 'hemakanthnatkunaraja@gmail.com',
        phone: '+94 755 712 812',
        subtitle: 'Electrical and Electronic Engineering Undergraduate ',
        social: {
            github: 'https://github.com/HemakanthNatkunaraja/',
            facebook: 'https://web.facebook.com/hemakanth.natkunarajah',
            linkedin: 'https://www.linkedin.com/in/hemakanth-natkunaraja-232aa2245/'
        }
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
        <div className='flex  py-3 justify-center'>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
        </div>
    
    </section>
}