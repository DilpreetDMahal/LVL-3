type FooterProp = {
  companyName: string;
};

export const Footer = ({ companyName }: FooterProp) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-3 text-gray-300 text-sm flex justify-between bg-white items-center nowrap overflow-hidden border-1 border-transparent shadow-lg ">
      <p>
        &copy; {currentYear} {companyName}
      </p>
      <p>{"Prices in usd"}</p>
    </footer>
  );
};
