import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MakeAdmin = () => {
    const [profiles, setProfile] = useState()

    useEffect(() => {
        fetch("https://hidden-ravine-16154.herokuapp.com/profiles").then(res => res.json()).then(data => setProfile(data))
    }, [])

    const handleMakeAdmin = (id) => {
        fetch(`https://hidden-ravine-16154.herokuapp.com/profiles/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ access: "Admin" }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged === true) {
                    toast.success("A New Admin Has been Set");
                    fetch("https://hidden-ravine-16154.herokuapp.com/profiles").then(res => res.json()).then(data => setProfile(data))
                }
            });
    };
    return (
        <div>
            <div className='overflow-x-auto my-5'>
                <table className='table w-full'>
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Education</th>
                            <th>linkedInProfile</th>
                            <th>Phone Number</th>
                            <th>Access Level</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {profiles?.map((profile, index) => (
                            <tr className='hover text-center'>
                                <th>{index + 1}</th>
                                <td>{profile?.name}</td>
                                <td>{profile?.email}</td>
                                <td>{profile?.education}</td>
                                <td>{profile?.linkedInProfile}</td>
                                <td>{profile?.phoneNumber}</td>
                                <td>
                                    <label
                                        for='delete-confirm-modal'
                                        className={`btn btn-sm btn-primary font-bold ${profile?.access === "user" ? "btn-primary" : "disabled"
                                            }`}
                                        onClick={() => {
                                            handleMakeAdmin(profile?._id);
                                        }}
                                    >
                                        Make Admin
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;