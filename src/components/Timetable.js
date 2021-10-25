import React, {useState, useEffect} from "react";
import moment, { weekdays } from "moment";

const  Timetable= () => {

    const [work1, setWork1] = useState("")
    const [work2, setWork2] = useState("")

    const [value, setValue] = useState(moment())


    const startDate = value.endOf("week")
    const endDate = value.clone().add(2, "weeks")

    return (  
       <div>

     

          start of the new week : {startDate.format("MM/DD")} <br />
          end of 2 week generation : {endDate.format("MM/DD")}
       
       </div>
    )
};




export default Timetable;