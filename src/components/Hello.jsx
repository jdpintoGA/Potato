import ButtonComp from "./ButtonComp";
import Potato from "../Img/Potato.svg";
import "../css/style.css";

function Hello() {
  return (
    <div id="body">
      <ButtonComp></ButtonComp>

      <img id="potato" src={Potato} alt="potato image" srcset="" />

      <h1>so many patatas woooow</h1>
    </div>
  );
}

export default Hello;
