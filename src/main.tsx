import { createRoot } from "react-dom/client";
import { HingeSmallPattern } from "./Components/Test/Test_Konva";
//import MainLogin from "./Section1/MainLogin";
//import MainPage from "./Section2/MainPage";
//import MainOrder from "./Section3/MainOrder";
//import MainCircle from "./Section4/MainCircle";

createRoot(document.getElementById("root")!).render(
  
  /**ввод тестовых страниц */
  
  <>
    {/* <MainLogin /> */}
    {/* <MainPage /> */}
    {/* <MainOrder/> */}
    {/* <MainCircle/> */}
    <HingeSmallPattern  width={5} height={4} position="vertical-l" key={34} />
  </>
);
