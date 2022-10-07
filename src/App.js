import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import TajMahal from "../src/images/tajmahal.jpeg";
import IndiaGate from "../src/images/india-gate.jpeg";
import RedFort from "../src/images/red-fort.jpeg";
import GoldenTemple from "../src/images/golden-temple.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="image-container">
        <Image
          path={TajMahal}
          alt="TajMahal"
          shape="circle"
          description="The Taj Mahal, is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself."
        />
        <Image
          path={IndiaGate}
          alt="IndiaGate"
          shape="ractangle"
          description="The India Gate (formerly known as the All India War Memorial) is a war memorial located astride the Kartavya path on the eastern edge of the ceremonial axis of New Delhi, formerly called duty path. It stands as a memorial to 84,000 soldiers of the British Indian Army who died between 1914 and 1921 in the First World War"
        />
        <Image
          path={RedFort}
          alt="RedFort"
          shape="square"
          description="The Red Fort or Lal Qila is a historic fort in Old Delhi, Delhi in India that served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi"
        />
        <Image
          path={GoldenTemple}
          alt="GoldenTemple"
          shape="triangle"
          description="The Golden Temple is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. It is one of the holiest sites in Sikhism, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur, and Gurdwara Janam Asthan in Nankana Sahib."
        />
      </div>
    </div>
  );
}

export default App;
