import './index.scss';
import Info from "./Info";
import Welcome from "./Welcome";
import Social from "./Social";
//import NFTs from "./NFTs";
import Footer from "../Footer/Footer";
import { LayoutContext } from '../../App';
import { useContext } from 'react';
import { ScreenSize } from '../../constants/constants';

export default function Landing() {
  const { screenSize } = useContext(LayoutContext);

  return (
    <div className="landing-wrapper">
      <Welcome />
      <Info />
      {/* <NFTs /> */}
      <Social />
      {screenSize === ScreenSize.Desktop && <Footer />}
    </div>
  )
}
