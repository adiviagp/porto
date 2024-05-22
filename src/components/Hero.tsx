import Container from '@components/Container';
import { MyPhoto } from '@src/assets/images';

const Hero = (): JSX.Element => {
  return (
    <div id="home">
      <Container className=" mt-16 flex items-center py-20 md:min-h-[600px]">
        <div className="w-2/4">
          <h1 className="leading-16 font-sans font-bold md:text-5xl">
            Hey There!, I'm <br />
            Adivia Gilang Prakarsa
          </h1>
          <div className="pb-5 pt-2 font-sans font-normal md:text-3xl">
            Frontend Engineer.
          </div>
          <div className="font-sans leading-relaxed md:text-2xl">
            I love building fast, maintainable and <br /> scaleable web
            applications.
          </div>
          <div className="mt-10 flex space-x-6">
            <a href="https://www.linkedin.com/in/adiviagp/">Linkedin</a>
            <a href="mailto:adivia93@gmail.com">Email</a>
          </div>
        </div>
        <div className="hidden w-2/4 justify-center md:flex">
          <div className="w-[300px]">
            <img src={MyPhoto} alt="adiviagp" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
