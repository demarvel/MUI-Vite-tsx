import { createRoot } from "react-dom/client";
import { HingeSmallPattern } from "./Components/Test/Test_Konva";
import App from "./Components/Test/111";
//import MainLogin from "./Section1/MainLogin";
//import MainPage from "./Section2/MainPage";
//import MainOrder from "./Section3/MainOrder";

createRoot(document.getElementById("root")!).render(
  
  /**ввод тестовых страниц */
  
  <>
    {/* <MainLogin /> */}
    {/* <MainPage /> */}
    {/* <MainOrder/> */}
    <App />
  </>
);
