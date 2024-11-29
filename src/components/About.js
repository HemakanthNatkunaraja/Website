import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'I am a final-year Electrical & Electronic engineering undergraduate. I am a passionate and adaptable fresher with a strong foundation in electronics, embedded systems, IoT, signalprocessing, and wireless communication.' ,
        line2: 'Eager to explore new technologies and excited to apply my knowledge to solve real-world engineering challenges.' ,
        line3: 'Commitment to continuous learning, I am eager to contribute innovative and practical solutions to meaningful projects in electronics and embedded systems.',
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}