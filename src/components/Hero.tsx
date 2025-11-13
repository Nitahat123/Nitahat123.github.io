import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
<<<<<<< HEAD
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[3.5rem] leading-[1.15] font-bold tracking-tight mb-12">
            I'm a <span className="italic">Flutter developer</span>,{" "}
            <span className="italic">mobile architect</span>,{" "}
            <span className="italic">cross-platform specialist</span> &{" "}
            <span className="italic">code-loving perfectionist</span>.
          </h1>

          <h2 className="text-[3.5rem] leading-[1.15] font-bold tracking-tight">
            I really love what I do.
          </h2>
        </div>
      </section>
      <style>{`
        .pt-32 {
          padding-top: 10rem;
        }

        .pb-20 {
          padding-bottom: 10rem;
        }
      `}</style>
    </>
=======
    <section className="pt-40 pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[4.5rem] md:text-[6rem] lg:text-[7rem] leading-[1.1] font-bold tracking-tight mb-16 animate-fade-in">
          I'm a{" "}
          <TypeAnimation
            sequence={[
              'Flutter developer',
              2000,
              'mobile architect',
              2000,
              'cross-platform specialist',
              2000,
              'code-loving perfectionist',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="italic text-accent drop-shadow-[0_0_30px_rgba(255,103,31,0.3)]"
            repeat={Infinity}
          />
          .
        </h1>
        
        <h2 className="text-[4.5rem] md:text-[6rem] lg:text-[7rem] leading-[1.1] font-bold tracking-tight animate-fade-in animation-delay-300 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          I really love what I do.
        </h2>
      </div>
    </section>
>>>>>>> 3cb05b759ca47528c38cc3030474442bc552e53c
  );
};

export default Hero;
