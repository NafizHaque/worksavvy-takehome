import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import UserList from './UserList';
import moment, { weekdays } from "moment";
import { daysToWeeks, differenceInCalendarQuarters, getDayOfYear } from "date-fns";


const UserDetails = () => {

    const { id } = useParams()
    const[user, setUser] = useState (null);


    const [work1, setWork1] = useState("")
    const [work2, setWork2] = useState("")

    const [value, setValue] = useState(moment())
    
    const startDate = value.endOf("week")
    const endDate = value.clone().add(1, "weeks")

    

    const day = startDate.clone().subtract(1,"day")  
    const calendar = []

    while(day.isBefore(endDate, "day")){
        calendar.push(
            Array(14).fill("").map(() => day.add(1, "day").clone())
        )
        
        
        
    };

    
    var rand1=Math.floor(Math.random() * 14)
    var rand2=Math.floor(Math.random() * 14)

    if (rand1 == rand2){
        if (rand1<2){
            rand1=Math.floor(Math.random() * 14)+2
        }
        else if(rand1>11){
            rand1=Math.floor(Math.random() * 11)

        }
        else{
            rand1=rand1+2
        }
    } 

    if (rand1+1 == rand2 || rand1-1 == rand2){
        if (rand1<2){
            rand1=Math.floor(Math.random() * 14)+2
        }
        else if(rand1>11){
            rand1=Math.floor(Math.random() * 11)

        }

        else{
            rand1=rand1+2
        }

    } 


    var day1 = calendar[0][rand1].format("ll")

    
    var day2 = calendar[0][rand2].format("ll")
    



    console.log(day1)
    console.log(day2)


    useEffect( () => {
        fetch("http://localhost:8000/users/" +id)
            .then(res => {
                return res.json();
            })
            .then((data) =>
            {

             setUser(data)

            });

        },  []);
    
    


      return ( 

        <div className="user-details">
            

            <h1>User Details - { id }</h1>

            {user && (
                <div> 
                     <article class="media content-section">
                    <div class="media-body">
                    <div class="article-metadata">
                        <small class="text-muted"></small>
                    </div>
                  
                    <h2> Users' Name: { user.name }</h2>
                    <p class="article-content">Job Title: { user.job }</p>
  
                    </div>
                </article>

                </div>  
            )}
                <h1>two week timetable</h1>
            <div className="calendar">
            
            {calendar.map(week => <div>
                {week.map(day => <div> 
                    {day.format("ll")}
                </div>)
                }

                
                
                </div>)}
            </div>
            <h2>days working</h2>
            {day1} <br />
            {day2}

            <br />
           
        </div>
      
            

     );
}






export default UserDetails;
