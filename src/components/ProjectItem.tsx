import GithubIcon from '@components/icon/Github';
import UrlIcon from '@components/icon/Url';
import { IData } from './Projects';

const ProjectItem = ({
  align,
  data,
}: {
  align: string;
  data: IData;
}): JSX.Element => {
  return (
    <div className="my-28">
      {align === 'Left' ? (
        <div className="flex flex-wrap items-center">
          <div className="order-2 w-full md:order-none md:w-2/4">
            <h2 className="text-sm">{data?.projectType}</h2>
            <h1 className="text-3xl font-bold ">{data?.title}</h1>
            <div className="relative my-6 bg-slate-50 md:w-[120%]">
              <p className="text-md p-5 font-sans leading-relaxed">
                {data?.description}
              </p>
            </div>
            <div>
              <ul className="mb-4 flex space-x-6 text-sm">
                {data?.tech.map((tech: string, index: number) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <div className="flex space-x-6">
                {data?.github ? <GithubIcon className="h-5 w-5" /> : null}
                {data?.url ? (
                  <a href={data?.url} target="_blank">
                    <UrlIcon className="h-5 w-5" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
          <div className="order-1 hidden w-full shadow-md md:order-none md:block md:w-2/4 ">
            <img src={data?.img} alt="" className="w-full" />
          </div>
        </div>
      ) : null}

      {align === 'Right' ? (
        <div className="relative flex items-center">
          <div className="hidden shadow-md md:block md:w-2/4">
            <img src={data?.img} alt="" className="w-full" />
          </div>
          <div className="right-0 w-full text-right md:absolute md:w-[60%]">
            <h2 className="text-sm">{data?.projectType}</h2>
            <h1 className="text-3xl font-bold ">{data?.title}</h1>
            <div className="my-6 w-full bg-slate-50">
              <p className="text-md p-5 font-sans leading-relaxed">
                {data?.description}
              </p>
            </div>
            <div>
              <ul className="mb-2 flex justify-end space-x-6 text-sm">
                {data?.tech.map((tech: string, index: number) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <div className="flex justify-end space-x-6">
                {data?.github ? <GithubIcon className="h-5 w-5" /> : null}
                {data?.url ? (
                  <a href={data?.url} target="_blank">
                    <UrlIcon className="h-5 w-5" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectItem;
