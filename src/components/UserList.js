import {Link} from "react-router-dom"



const UserList = (props) => {

    const users = props.users;
    


    return ( 

        users.map((user) => (
            <div className="user-list">
                
                <div className="user-preview" key ={user.id}>
                <article class="media content-section">
                    <div class="media-body">
                    <div class="article-metadata">
                        <small class="text-muted"></small>
                    </div>
                    <Link to= {`/users/${user.id}`}>
                    <h2> Users' Name: { user.name }</h2>
                    <p class="article-content">Job Title: { user.job }</p>
                    </Link>
                    </div>
                </article>
        
                </div>
            </div>
       
        ))




     );
}
 
export default UserList;


