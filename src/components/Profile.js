import React, { useState, useEffect } from 'react'
import Axios from 'axios'

// PROFULE PAGE is going do the following 
/*
useState for our name, email, street, city, state, zipcode
useeffedct for accessing github api to brab userdata
create funtion 

*/

const Profile = props => {
    const [name, setName] = useState('Vinny VIlasboa')
    const [email, setEmail] = useState('friday@gmail.com')
    const [street, setStreet] = useState('123 main st')
    const [city, setCity] = useState('Hartsdale')
    const [state, setState] = useState('NY')
    const [zipcode, setZipcode] = useState('10530')
    const [username, setUsername] = useState('')


    useEffect(() => {
        // effect
        //use for an API
        let url = 'https://api.github.com/users/vinnyvilasboa'
        Axios.get(url)
        .then(response => {
            console.log(response.data)
            setUsername(response.data.login);
        })
    }, []);

    const updateName = e =>{
        e.preventDefault();
        let newName = e.target.elements.name.value;
        setName(newName);
    }

    const updateProfile = () =>{

        setName(props.other.name)
    }
    //the above uses props to get other and go into that object and get name

    return (
        <div>
            <h1>Profile</h1>
            <hr />
            <h2>{name}</h2>
            <button onClick={updateProfile} >Add Other name</button>
            <hr />
            <p>{email}</p>
            <p>{street}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zipcode}</p>
            <form onSubmit={updateName} action="">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>
                <button type="submit"> Change Name</button>
                
            </form>
            <h2> Username: {username} </h2>
        </div>
    )
}

export default Profile;