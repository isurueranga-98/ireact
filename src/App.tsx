import Logo from './ireact.svg';

const App: React.FC = () => {
  return (
    <header className="h-screen bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] ... items-center justify-center flex ">
      <img src={Logo} className='w-96' alt="logo" />
      <h1 className="text-8xl font-bold ">react</h1>
    </header>
  );
};

export default App;