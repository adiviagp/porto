import ProjectItem from '@components/ProjectItem';
import Container from '@components/Container';
import {
  BFIDashboardImg,
  FramerImg,
  LedgerAPIImg,
  LedgerUIImg,
  MitraTokopediaImg,
  Pokedeximg,
} from '@src/assets/images';

export interface IData {
  projectType: string;
  title: string;
  description: string;
  tech: string[];
  url: string | null;
  img: string;
  github: string | null;
}

const data: IData[] = [
  {
    projectType: 'Main Project',
    title: 'BFI Finance Internal CMS',
    description:
      'The BFI CMS is designed to digitalize the manual process of document validation and approval. It provides a streamlined workflow for document approval and ensures the integrity and accuracy of the process. Additionally, the app includes unit tests to maintain code quality and reliability. The app is built using React.js, Redux for state management, and Jest for unit testing.',
    tech: ['React', 'Redux', 'Material UI', 'Jest'],
    url: null,
    img: BFIDashboardImg,
    github: null,
  },
  {
    projectType: 'Side Project',
    title: 'General Ledger UI',
    description:
      'The General Ledger Dashboard app is designed to provide users with a comprehensive and interactive interface for managing accounting journals and generating general ledger reports. The app ensures efficient data handling and a user-friendly experience through its dynamic dashboard UI. Built using React.js and React Query, the app offers a robust and responsive solution for financial management.',
    tech: ['React', 'Tailwind', 'React Query', 'Zustand'],
    img: LedgerUIImg,
    url: 'https://test-fe.akuntansi-agp.com/',
    github: 'https://github.com/adiviagp/general-ledger-public',
  },
  {
    projectType: 'Side Project',
    title: 'General Ledger API',
    description:
      'The General Ledger API is designed to manage accounting journals and generate financial reports in Excel format. This API provides a comprehensive solution for handling CRUD operations on accounting journal entries and generating detailed ledger reports. Built using Node.js and Express.js, the API ensures robust performance and scalability.',
    tech: ['Node.js', 'Express.js'],
    img: LedgerAPIImg,
    url: null,
    github: 'https://github.com/adiviagp/general-ledger-api',
  },
  {
    projectType: 'Side Project',
    title: 'Pokedex',
    description:
      'The Pokedex app is designed to provide users with an interactive experience where they can view a list of Pokémon, catch Pokémon with a certain probability, and display the Pokémon they own. The app is built using React.js, React Query, and GraphQL, ensuring a dynamic and responsive user interface with efficient data fetching and state management.',
    tech: ['Jquery', 'Bootstrap'],
    url: null,
    img: Pokedeximg,
    github: 'https://github.com/adiviagp/pokemon',
  },
  {
    projectType: 'Side Project',
    title: 'Framer',
    description:
      'creation of scroll-triggered animations that enhance the visual appeal and interactivity of web pages. Framer Motion is used to animate elements as they come into the viewport during scrolling, providing a seamless and engaging user experience.',
    tech: ['Jquery', 'Bootstrap'],
    url: null,
    img: FramerImg,
    github: 'https://github.com/adiviagp/scroll-framer',
  },
  {
    projectType: 'Side Project',
    title: 'Mitratokopedia UI Clone',
    description:
      'The UI clone mimics the design and layout of the Mitra Tokopedia platform. It includes essential components and pages, ensuring a visually similar and user-friendly experience. Tailwind CSS is used for styling, enabling rapid development with utility-first CSS classes.',
    tech: ['React', 'Tailwind'],
    url: null,
    img: MitraTokopediaImg,
    github: 'https://github.com/adiviagp/mitratokopedia_react_tailwind',
  },
];
const Projects = (): JSX.Element => {
  return (
    <div id="project" className="bg-white">
      <Container className=" py-16">
        <h1 className="text-center font-sans font-bold md:text-4xl">
          Projects
        </h1>
        <p className="text-md mb-12 text-center font-sans leading-relaxed">
          Things I've build so far
        </p>

        {data.map((data: IData, index: number) => (
          <ProjectItem
            key={data.title}
            align={index % 2 === 0 ? 'Right' : 'Left'}
            data={data}
          />
        ))}
      </Container>
    </div>
  );
};

export default Projects;
