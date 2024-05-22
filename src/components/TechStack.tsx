import { useState } from 'react';
import Container from '@components/Container';
import Marquee from 'react-fast-marquee';
import { stackList } from '@src/constant';

const TechStack = (): JSX.Element => {
  const [checked, isChecked] = useState(false);

  return (
    <div id="tech-stack" className="bg-slate-50 py-16">
      <Container className="text-center">
        <h1 className="font-sans font-bold md:text-4xl">My Tech Stack</h1>
        <p className="text-md font-sans leading-relaxed">
          Technologies i've been working with recently
        </p>
        <label className="relative mt-4 inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            value=""
            checked={checked}
            className="peer sr-only"
            onClick={() => isChecked(!checked)}
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Show as list
          </span>
        </label>
        {checked ? (
          <ul className="mt-12 flex flex-wrap justify-center gap-10">
            {stackList.map((stack, index) => (
              <li key={index} className="flex w-1/5 items-center space-x-4">
                <img src={stack.img} alt="title" width={50} />
                <p className="font-sans text-xl">{stack.title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="py-20">
            <Marquee gradientColor={'248, 250, 252'} className="mb-10">
              {stackList.map((stack) => (
                <li
                  key={stack.title}
                  className="mr-16 flex w-1/5 items-center justify-center space-x-4"
                >
                  <img src={stack.img} alt="title" width={50} />
                  <p className="font-sans text-xl">{stack.title}</p>
                </li>
              ))}
            </Marquee>
            <Marquee gradientColor={'248, 250, 252'} direction={'right'}>
              {stackList.map((stack) => (
                <li
                  key={stack.title}
                  className="mr-16 flex w-1/5 items-center justify-center space-x-4"
                >
                  <img src={stack.img} alt="title" width={50} />
                  <p className="font-sans text-xl">{stack.title}</p>
                </li>
              ))}
            </Marquee>
          </div>
        )}
      </Container>
    </div>
  );
};

export default TechStack;
