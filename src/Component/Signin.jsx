import React, { useState } from 'react';
function Signin() {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [studentArray, setstudentArray] = useState([]);
    const submit = () => {
        let newStudent = { firstname, lastname, email, password };
        setstudentArray([...studentArray, newStudent]);
    }

    const deleteitem = (uniqueindex) => {
        setstudentArray(studentArray.filter((student, index) => index!== uniqueindex));
    }
    


    return (
        <>
            <div className='container-fluid col-6 mt-lg-5 shadow py-2 px-4'>
                <h1 className='text-center my-3'>Sign Up</h1>
                <div className="form-group my-3">
                    <input type="text" className='form-control' placeholder='firstname' onChange={(e) => setfirstname(e.target.value)} />
                </div>
                <div className="form-group my-3">
                    <input type="text" className='form-control' placeholder='lastname' onChange={(e) => setlastname(e.target.value)} />
                </div>
                <div className="form-group my-3">
                    <input type="text" className='form-control' placeholder='email' onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className="form-group my-3">
                    <input type="password" className='form-control' placeholder='password' onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div className="form-group my-3">
                    <button onClick={submit} className='btn btn-success w-100'>Submit</button>
                </div>

            </div>
            <table className='table table-striped table-dark'>
                <thead>
                    <tr>
                        <td>S/N</td>
                        <td>Firstname</td>
                        <td>Lastname</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Delete/Edit</td>
                    </tr>
                </thead>
                {
                    studentArray.map((item, index) => (
                        <>
                        <tbody>
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td><button onClick={()=>{deleteitem(index)}} className='btn btn-sm btn-danger'>delete</button></td>
                            </tr>
                        </tbody>
                        </>


                    ))
                }
            </table>

        </>
    )
}

export default Signin
