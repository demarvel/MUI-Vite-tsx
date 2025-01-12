
import Accordion_MainOrder from "../Components/Accordion/Accordion_MainOrder";
import Accordion_MainOrder1 from "../Components/Accordion/Accordion_MainOrder1";
import Accordion_MainOrder2 from "../Components/Accordion/Accordion_MainOrder2";
import AppBar_MainOrder from "../Components/AppBar/AppBar_MainOrder";
import DividerVariants from "../Components/Divider/DividerVariants";
import Drawer_MainOrder_Button from "../Components/Drawer/Drawer_MainOrder_Button";
import SendIcon from "@mui/icons-material/Send";


const MainOrder = () => {
  return (
    <>
    <AppBar_MainOrder endIcon={<SendIcon/>} label="Отправить"/>
    <Accordion_MainOrder/>
    <DividerVariants/>
    
    <Drawer_MainOrder_Button/>
    {/* Если 1 панель вставляется AccordionMainPage1 */}
    <Accordion_MainOrder1/> 
    {/* Если 2 панели и более вставляется AccordionMainPage2 */}
    <Accordion_MainOrder2/>
    
    </>
  );
};

export default MainOrder;
