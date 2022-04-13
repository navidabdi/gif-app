const Header = () => {
  return (
    <header className="container flex gap-5 items-center justify-between py-5 mt-2 border-b border-blue-100">
      <a href="/" className="font-bold text-xl tracking-widest">
        GIF FINDER
      </a>
      <input
        value={'test'}
        className="flex-grow md:w-[50%] md:flex-grow-0 p-2 text-lg border-blue-100 border outline-none rounded-md focus:border-blue-400 focus:bg-blue-50"
        type="text"
        placeholder="Search"
      />
    </header>
  );
};

export default Header;
