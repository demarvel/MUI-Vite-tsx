import { createRoot } from "react-dom/client";
//import MainLogin from "./Section1/MainLogin";
//import MainPage from "./Section2/MainPage";
import MainOrder from "./Section3/MainOrder";

createRoot(document.getElementById("root")!).render(
  
  /**ввод тестовых страниц */
  
  <>
    {/* <MainLogin /> */}
    {/* <MainPage /> */}
    <MainOrder/>
  </>
);
