import React from "react";
import Ranking from "./components/Ranking";
import Menu from "./components/Menu";

function App() {

  return (
    <>
    <Menu />

    <div className="bg-gradient-to-r bg-gradient-to-r from-indigo-900 to-purple-900 text-center selection:bg-white selection:text-black">
    

      <header className="z-1 p-9 max-w-screen flex min-h-full flex-col items-center justify-center text-white">

        <h1 className="m-5 font-mono text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter shadow-black drop-shadow-md">
          <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent shadow-black drop-shadow-2xl">
             BIOBIO URBANO
          </span>
        </h1>
        <div className="rounded-box  sm:text-md md:text-xl lg:text-xl xl:text-xl bg-white text-2xl text-black ">
          <h2 className="p-2 md:p-5 font-bold">Playlist abierta. Seleccionamos las mejores canciones urbanas del biobio</h2>

        </div>
      <div className="p-5 space-x-5">
      <button className="btn glass btn-xs sm:btn-sm md:btn-md lg:btn-lg">COMO PARTICIPAR</button>

      <button className="btn glass btn-xs sm:btn-sm md:btn-md lg:btn-lg">PROPONER MUSICA</button>
      </div>

      </header>
      <div className="">
        <Ranking />
      </div>
    </div>
    </>
  );
}

export default App;
