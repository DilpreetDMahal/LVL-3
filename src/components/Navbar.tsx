type NavbarProps = {
  title: string;
  nav: {
    label: string;
    href: string;
  }[];
};

export const Navbar = ({ title, nav }: NavbarProps) => {
  return (
    <div className="my-1 p-5 sticky top-0 flex bg-white items-center overflow-hidden border-1 border-transparent shadow-lg ">
      <h1 className="text-2xl font-bold text-green-900 grow ">
        <a href="#">{title}</a>
      </h1>
      <div className="flex justify-end grow ">
        {nav.map((item, index) => {
          return (
            <a
              className="px-5 font-bold text-base text-gray-400"
              key={index}
              href={item.href}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
