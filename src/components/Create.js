import { useState } from 'react';
import { useHistory } from 'react-router';



const Create = () => {

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const work1 = "";
    const work2 ="";

    const history = useHistory();


    const handleSubmit = (e) => {

        e.preventDefault();
        
        const newUser = {name, job, work1, work2};

        fetch("http://localhost:8000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        }).then(() => {

            history.go(-1);
        })
    }

    return (

        <div className="create">
            
            <h1>Welcome Create User Page</h1>

            <form onSubmit={handleSubmit}>

                <label > User Name: </label>
                <input 
                    type="text" 
                    required 
                    value = { name } 
                    onChange = {(e) => setName(e.target.value)}
                    

                />
                <label> User Job:</label>
                <input type="text" 
                    required 
                    value = { job } 
                    onChange = {(e) => setJob(e.target.value)}
                    
                />
                <br /><br /><br />  
                <button>Add User</button>

            </form>
            <p>testing inputs:
                <br />
                name: { name } 
                <br />
                job: { job } 
            </p>
        </div>



      );
}
 
export default Create;