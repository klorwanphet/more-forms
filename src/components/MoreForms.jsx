import React, { useState } from  'react';

const UserForm = props =>{
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")
    const [ferror, setferror]= useState("")
    const [lerror, setlerror]= useState("")
    const [eerror, seteerror]= useState("")
    const [perror, setperror]= useState("")


    const handlefname =(e)=>{
        setfname(e.target.value)
        if(e.target.value.length < 2){
            setferror("First Name must be at least 2 characters in length")
        }
        else{
            setferror('')
        }
    }
    const handlelname =(e)=>{
        setlname(e.target.value)
        if(e.target.value.length < 2){
            setlerror("Last Name must be at least 2 characters in length")
        }
        else{
            setlerror('')
        }
    }
    const handleemail =(e)=>{
        setemail(e.target.value)
        if(e.target.value.length < 5){
            seteerror("Email must be at least 5 characters in length")
        }
        else{
            seteerror('')
        }
    }
    const handlepassword =(e)=>{
        setpassword(e.target.value)
        if (setpassword(e.target.value) !== setcpassword(e.target.value)){
            setperror("Passwords do not match.")
        }
        else{
            setperror('')
        }
        if(e.target.value.length < 8){
            setperror("Password must be at least 8 characters in length")
        }
        else{
            seteerror('')
        }
    }

    return(
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname" className="form-control" onChange={handlefname}/>
                    {
                        ferror?
                        <p style= {{color:'red'}}>{ferror}</p>:
                        ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" id="lname" className="form-control" onChange={handlelname}/>
                    {
                        lerror?
                        <p style= {{color:'red'}}>{lerror}</p>:
                        ''
                    }
                    
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" className="form-control" onChange={handleemail}/>
                    {
                        eerror?
                        <p style= {{color:'red'}}>{eerror}</p>:
                        ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" className="form-control" onChange={handlepassword}/>
                    {
                        perror?
                        <p style= {{color:'red'}}>{perror}</p>:
                        ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="text" name="cpassword" id="cpassword" className="form-control" onChange={handlepassword}/>
                </div>
            </form>

            <h3>Your form data</h3>
            <form>
                <div className="form-group">
                    <label>First Name:</label>
                    { fname }
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name:</label>
                    { lname }
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    { email }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password:</label>
                </div>
            </form>
        </>
    )
}
    
export default UserForm;