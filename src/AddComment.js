import { useState, useEffect } from "react";

const AddComment = () => {


    let [data, setData] = useState([]);

    useEffect(() => {
        
        let url = 'http://localhost:8000/currentUser'
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data)
            )
    }, [])

 

    console.log(data);

    return ( 
        <div className="AddCommentContainer">

            <img src={data.image && data.image.png ? data.image.png : ''} alt="" />
            
            <textarea size={40} placeholder="Add a comment..."></textarea>
            <button className="BtnSend">Send</button>

        </div>
     );
}
 
export default AddComment;