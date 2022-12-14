import React from 'react';
import toast from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const UserCard = ({user, btnName, setRefetch}) => {

    const handleDeleteUser = (id) => {
        const proceed = window.confirm(`Are you sure you want to delete this ${btnName}?`)
        if(proceed){
            fetch(`https://4wheelanes-server.vercel.app/deleteuser?id=${id}`, {
                method:'DELETE',
                headers: {
                  'content-type': 'application/json', 
                  authorization: `bearer ${localStorage.getItem('wheelanesToken')}`
              }
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success(`Successfully Deleted The ${btnName}`)
                    setRefetch(true)
                }
            })
            .catch(err => {
              console.error(err)
              toast.error('Something is wrong. Please try to log out and log in again.')
            })
        }
    }

    const handleMakeAdmin = (id) =>{
        const proceed = window.confirm(`Are you sure to make ${btnName} an admin?`)
        if(proceed){
            fetch(`https://4wheelanes-server.vercel.app/makeadmin?id=${id}`, {
                method:'put',
                headers: {
                  'content-type': 'application/json', 
                  authorization: `bearer ${localStorage.getItem('wheelanesToken')}`
              }
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success(`Successfully Deleted The ${btnName}`)
                    setRefetch(true)
                }
            })
            .catch(err => {
              console.error(err)
              toast.error('Something is wrong. Please try to log out and log in again.')
            })
        }
    }

    const handleVerify = (id) => {
        const proceed = window.confirm(`Are you sure verify the seller?`)
        if(proceed){
            fetch(`https://4wheelanes-server.vercel.app/verify?id=${id}`, {
                method:'put',
                headers: {
                  'content-type': 'application/json', 
                  authorization: `bearer ${localStorage.getItem('wheelanesToken')}`
              }
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success(`Successfully Verified The Seller`)
                    setRefetch(true)
                }
            })
            .catch(err => {
              console.error(err)
              toast.error('Something is wrong. Please try to log out and log in again.')
            })
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
        { user?.role === "Seller" &&
        <th>
          <button disabled={user?.role !== "Seller" || user?.verified === true} onClick={()=>handleVerify(user?._id)} className="btn btn-warning btn-xs">Verify Seller</button>
        </th>
        }
        <th>
          <button disabled={user?.role === "Admin"} onClick={()=>handleDeleteUser(user?._id)} className="btn btn-error btn-xs">Delete {btnName}</button>
        </th>
      </tr>
    );
};

export default UserCard;