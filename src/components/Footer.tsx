import Container from '@components/Container';
import { MyLogo } from '@src/assets/images';

const Footer = (): JSX.Element => {
  return (
    <>
      <Container className="flex h-16 items-center items-center justify-between border-b border-gray-900/20 pb-12 font-sans text-gray-900">
        {/* <h1>Adiviagp</h1> */}
        <img
          src={MyLogo}
          alt="mylogo"
          width={200}
          className="hidden md:block"
        />
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/adiviagp/">Linkedin</a>
          <a href="mailto:adivia93@gmail.com">Email</a>
        </div>
      </Container>
      <Container className="p-12 pt-3 text-center text-gray-800">
        <h3 className="text-sm">Copyright © 2024 Adivia Gilang Prakarsa</h3>
        <h4 className="text-sm">
          Built from scratch using React, TypeScript, Tailwind CSS and hosted on
          CloudFlare Pages.
        </h4>
      </Container>
    </>
  );
};

export default Footer;
