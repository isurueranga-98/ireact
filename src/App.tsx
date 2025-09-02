import { FC } from 'react';
// import Logo from './ireact.svg';

const App: FC = () => {
  return (
    <header className="h-screen bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] flex items-center justify-center">
      <div className="text-center">
        {/* <img src={Logo} className="w-96 mx-auto mb-8" alt="iReact Logo" /> */}
        <h1 className="text-8xl font-bold text-gray-800">iReactTS</h1>
        <p className="text-2xl text-gray-600 mt-4">
          React 19 + TypeScript 5 + Tailwind CSS 3
        </p>
        <div className="mt-8 text-lg text-gray-500">
          <p>🚀 Modern React Development</p>
          <p>⚡ Lightning Fast with Parcel</p>
          <p>🎨 Beautiful UI with Tailwind CSS</p>
        </div>
      </div>
    </header>
  );
};

export default App;