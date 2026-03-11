import React, { useState, useEffect, use } from "react";
import { updateProfile, signOut } from "firebase/auth";
import { FiEdit, FiSave, FiX } from "react-icons/fi";
import { auth } from "../../Firebase/Firebase.init";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
    const {Logout}=use(AuthContext)
  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setDisplayName(currentUser.displayName || "");
        setPhotoURL(currentUser.photoURL || "");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (!user) return;
    try {
      await updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL,
      });
      // Refresh user object
      setUser({ ...user, displayName, photoURL });
      setEditMode(false);
    } catch (error) {
      alert("Error updating profile: " + error.message);
    }
  };

  const handleSignOut = async () => {
    Logout().then(res => toast.success("your log out successfull"))
    .then(error => toast.error("your logout not successfull"))
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Not Signed In</h2>
            <p>Please sign in to view your profile.</p>
            <div className="card-actions justify-end">
              <Link to={"/login"}
                className="btn bg-orange-500"
              >
                Go to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt={user.displayName || "User"}
              />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user.displayName || "No Name"}</h2>
          <p>{user.email}</p>

          {!editMode? (
            <div className="card-actions">
              <button
                className="btn bg-orange-500"
                onClick={() => setEditMode(true)}
              >
                <FiEdit className="mr-2" /> Edit Profile
              </button>
            </div>
          ) : (
            <form onSubmit={handleUpdateProfile} className="w-full">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Display Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Display Name"
                  className="input input-bordered w-full"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>
              <div className="form-control w-full mt-2">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  className="input input-bordered w-full"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </div>
              <div className="card-actions justify-between mt-4">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => {
                    setEditMode(false);
                    // Reset to original values
                    setDisplayName(user.displayName || "");
                    setPhotoURL(user.photoURL || "");
                  }}
                >
                  <FiX className="mr-2" /> Cancel
                </button>
                <button type="submit" className="btn bg-orange-500">
                  <FiSave className="mr-2" /> Update Profile
                </button>
              </div>
            </form>
          )}

          {!editMode && (
            <div className="mt-4">
              <button className="btn btn-outline btn-sm" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;