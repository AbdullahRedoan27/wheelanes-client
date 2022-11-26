import React from 'react';
import toast from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const UserCard = ({user, btnName, setRefetch}) => {

    const handleDeleteUser = (id) => {
        const proceed = window.confirm(`Are you sure you want to delete this ${btnName}?`)
        if(proceed){
            fetch(`http://localhost:5000/deleteuser?id=${id}`, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success(`Successfully Deleted The ${btnName}`)
                    setRefetch(true)
                }
            })
            .catch(err=> console.error(err))
        }
    }

    const handleMakeAdmin = (id) =>{
        const proceed = window.confirm(`Are you sure to make ${btnName} an admin?`)
        if(proceed){
            fetch(`http://localhost:5000/makeadmin?id=${id}`, {
                method:'put'
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success(`Successfully Deleted The ${btnName}`)
                    setRefetch(true)
                }
            })
            .catch(err=> console.error(err))
        }
    }

    const handleVerify = (id) => {
        const proceed = window.confirm(`Are you sure verify the seller?`)
        if(proceed){
            fetch(`http://localhost:5000/verify?id=${id}`, {
                method:'put'
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success(`Successfully Verified The Seller`)
                    setRefetch(true)
                }
            })
            .catch(err=> console.error(err))
        }
    }

    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
              <PhotoProvider>
                <PhotoView src={user?.photo}>
                  <img src={user?.photo} alt="user" />
                </PhotoView>
              </PhotoProvider>
              </div>
            </div>
            <div>
              <div className="font-bold">{user?.name}</div>
              <div className="text-sm opacity-50">{user?.email}</div>
            </div>
          </div>
        </td>
        <td>{user?.role}</td>
        <th>
          <button disabled={user?.role === "Admin"} onClick={()=>handleMakeAdmin(user?._id)} className="btn btn-warning btn-xs">Make Admin</button>
        </th>
        { 
        <th>
          <button disabled={user?.role !== "Seller"} onClick={()=>handleVerify(user?._id)} className="btn btn-warning btn-xs">Verify Seller</button>
        </th>
        }
        <th>
          <button disabled={user?.role === "Admin"} onClick={()=>handleDeleteUser(user?._id)} className="btn btn-error btn-xs">Delete {btnName}</button>
        </th>
      </tr>
    );
};

export default UserCard;