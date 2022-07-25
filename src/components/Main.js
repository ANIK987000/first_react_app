import Form from "./Form";
import MenuItem from "./MenuItem";
import Paragraph from "./Paragraph";
import TopMenu from "./TopMenu";
import EventHandle from "./EventHandle";


const Main=()=>{
    return(
        <div> 
            <TopMenu></TopMenu>
            <MenuItem></MenuItem>
            <Form></Form>
            <Paragraph/>
            <EventHandle></EventHandle>
        </div>
       
    )
}
export default Main;