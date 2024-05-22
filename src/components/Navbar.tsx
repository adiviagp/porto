import Container from '@components/Container';
import { MyLogo } from '@src/assets/images';

interface IMenu {
  id: string;
  name: string;
}
const menus: IMenu[] = [
  {
    id: 'home',
    name: 'Home',
  },
  {
    id: 'tech-stack',
    name: 'Tech Stack',
  },
  {
    id: 'project',
    name: 'Project',
  },
];

const Navbar = (): JSX.Element => {
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split('#')[1],
    );
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-900/20 backdrop-blur-xl">
      <Container className="flex h-16 items-center font-sans text-gray-900">
        <img alt="logo" src={MyLogo} width={90} />

        <nav className="ml-20 hidden md:block">
          <ul className="flex space-x-10 text-sm font-medium uppercase text-gray-900">
            {menus.map((menu) => (
              <a key={menu.id} onClick={(e) => onPress(e)} href={'#' + menu.id}>
                <li data-to-scrollspy-id={menu.id}>{menu.name}</li>
              </a>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center space-x-2 text-sm uppercase md:space-x-8">
          <div className="cursor-pointer rounded-xl px-3 py-1 text-xs transition-colors hover:bg-slate-100 md:text-sm">
            {/* <MoonIcon /> */}
            {/* <SunIcon /> */}
          </div>
          <a
            href="/adivia-cv.pdf"
            download
            className="cursor-pointer rounded-xl px-4 py-1 text-xs transition-colors hover:bg-slate-100 md:text-sm"
          >
            resume
          </a>
          <a
            href="mailto:adivia93@gmail.com"
            className="cursor-pointer rounded-xl bg-green-800 px-4 py-1 text-xs text-slate-200 transition-colors hover:bg-green-700 md:text-sm"
          >
            open to work
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
