import { HeroSection } from "../widgets/HeroSection/HeroSection";

interface IArray {
  name: string;
  surname: string;
}

function App() {
  const someFUnction = () => {
    console.log("asd");
  };
  return(
  <div className="">
    <HeroSection />
  </div>

  )
}

export default App;
