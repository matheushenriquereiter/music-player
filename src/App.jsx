import MusicPlayer from "./components/MusicPlayer";
import albumCover from "./assets/albumCover.png";

function App() {
  return (
    <div className="h-screen bg-black flex justify-center items-center overflow-hidden">
      <MusicPlayer
        albumCover={albumCover}
        music="Acorda Devinho"
        band="Banda Rocketseat"
        progress
      ></MusicPlayer>
    </div>
  );
}

export default App;
