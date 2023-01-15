import React from "react";
import playBack from "../assets/play-back.svg";
import play from "../assets/play.svg";
import PlayNext from "../assets/play-next.svg";

const MusicPlayer = ({ albumCover, music, band, progress }) => {
  return (
    <div className="bg-purple rounded-[10px]">
      <div className="flex flex-col justify-center md:px-[38px] md:py-[50px] px-[28px] py-[28px] gap-7">
        <div className="flex md:flex-col flex-row gap-7">
          <img
            className="md:h-[190px] h-[84px]"
            src={albumCover}
            alt="Imagem do Ámbum"
          />
          <div className="text-white-100 flex flex-col justify-center">
            <h1 className="text-[24px]">{music}</h1>
            <h2 className="text-[20px] opacity-70">{band}</h2>
          </div>
        </div>
        <div className="flex md:justify-between justify-evenly">
          <button>
            <img src={playBack} alt="Botão de voltar a música." />
          </button>
          <button>
            <img src={play} alt="Botão de tocar/pausar a música." />
          </button>
          <button>
            <img src={PlayNext} alt="Botão de próxima a música." />
          </button>
        </div>
        {progress && (
          <div className="sm:flex hidden flex-col gap-[8px]">
            <div className="bg-[#d9d9d950] h-[6px] rounded-[10px]">
              <div className="bg-white-200 h-full w-4/5 rounded-[10px]"></div>
            </div>
            <div className="flex justify-between text-white-200 opacity-50 text-[14px]">
              <p>03:20</p>
              <p>00:12</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
