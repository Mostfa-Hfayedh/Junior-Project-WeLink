import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import axios from "axios";
import List from "./components/List.jsx";
import CreateLink from "./components/CreateLink.jsx";
import UpdateLink from "./components/UpdateLink.jsx";

const App=()=> {
    const [users,setUsers]= useState([])
    const [links,setLinks]= useState([])
    const [view,setView] = useState('login')
    const [index,setIndex] = useState(0)

    const fetchUsers=()=>{
        axios.get('/api/users/getAll')
        .then((res)=>{
            console.log("users",res.data);
            setUsers(res.data)
        })
        .catch((err)=>{
            throw err
        })
    }
    const fetchLinks=()=>{
        axios.get('/api/links/getAll')
        .then((res)=>{
            console.log("links",res.data);
            setLinks(res.data)
        })
        .catch((err)=>{
            throw err
        })
    }
    

    const fetch = ()=>{
        fetchLinks()
        fetchUsers()
    }


    useEffect(()=>{
        fetch()
    },[])

    const handleLogin=(name,pass)=>{
        users.forEach((e)=>{
            if(e.name === name && e.password === pass){
                changeView('list')
            }
        })
    }


    const handleCreateLink = (newLink)=>{
        axios.post('/api/links/add',newLink)
        .then(()=>{
            fetchLinks()
        })
        .catch((err)=>{
            throw err
        })
        changeView('list')
    }
    
    const changeView = (newView)=>{
        setView(newView)
    }
    const handleSignUp = (newUser)=>{
        axios.post('/api/users/add',newUser)
        .then(()=>{
            fetchUsers()
        })
        .catch((err)=>{
            throw err
        })
        changeView('login')
    }

    const handleUpdate = (id,newLink) =>{
        axios.put(`/api/links/${id}`,newLink)
        .then(()=>{
            fetchLinks()
        })
        .catch((err)=>{
            throw err
        })
        changeView('list')
    }

    const goToUpdate =(index)=>{
        setIndex(index)
        changeView('update')
    }


    const handleDelete = (id) =>{
        axios.delete(`/api/links/${id}`)
        .then(()=>{
            fetchLinks()
        })
        .catch((err)=>{
            throw err
        })
    }


    
    const renderView=()=>{
        if(view === "login"){
            return <Login changeView={changeView} handleLogin={handleLogin} />
        }
        else if( view === "signUp"){
            return <SignUp handleSignUp={handleSignUp} />
        }
        else if(view === "list"){
            return (
                <div>
                    <Navbar changeView={changeView} />
                    <List users={users} links={links} goToUpdate={goToUpdate} handleDelete={handleDelete} />
                </div>
            )
        }
        else if (view === "create"){
            return(
                <div>
                    <Navbar changeView={changeView} />
                    <CreateLink  handleCreateLink={handleCreateLink}  />
                    <List users={users} links={links} goToUpdate={goToUpdate}  handleDelete={handleDelete}/>
                </div>
            )
        }
        else if ( view === "update"){
       return(     <div>
                    <Navbar changeView={changeView} />
                    <UpdateLink  handleUpdate={handleUpdate} link={links[index]}  />
                    <List users={users} links={links} goToUpdate={goToUpdate} handleDelete={handleDelete} />
                </div>
       )
        }
    }

    return (
        <div>
            {renderView()}
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById("app"));