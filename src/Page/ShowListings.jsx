import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ShowListings = ({car,cars,setCars}) => {

    // update 
const hendleSubmit =(e)=>{
    e.preventDefault()

    const newCar ={
            carName: e.target.name.value,
            description: e.target.description.value,
            category: e.target.category.value,
            rentPrice: e.target.rentPrice.value,
            location: e.target.location.value,
            imageUrl: e.target.ImageUrl.value,
        }
        console.log(newCar)

        fetch(`https://my-assignment10-server.vercel.app/cars/${car._id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newCar)
        })
        .then(res =>res.json())
        .then(data =>{
            toast.success("Data Update Successfull")
            console.log(data)
        })
        .catch(error =>console.log(error ))
}


// delete 

const hendleDelete =()=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    fetch(`https://my-assignment10-server.vercel.app/cars/${car._id}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data =>{
        window.location.reload()
        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
        console.log(data)
    })
    .catch(error =>console.log(error))
    
  }
});
}

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={car.imageUrl}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
             {car.carName}
            </h1>

            <div className="flex gap-3">
              <div className="badge badge-lg badge-outline text-[#FF2D55] border-[#FF6B00] font-medium">
                {car.category}
              </div>

              <div className="badge badge-lg badge-outline text-[#FF2D55] border-[#FF6B00] font-medium">
                {car.status}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {car.description}
            </p>

            <div className="flex gap-3 mt-6">
              <button
                 onClick={()=>document.getElementById('my_modal_5').showModal()}
                className="btn rounded-full bg-linear-to-r from-[#FF6B00] to-[#FF2D55] text-white border-0 hover:from-pink-600 hover:to-red-700"
              >
                Update Car
              </button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    
{/* modal infomation */}
                    <div >
         <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl ">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Update Car</h2>
        <form onSubmit={hendleSubmit} className="space-y-4 ">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Car Name</label>
            <input
              type="text"
              name="name"
             
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              defaultValue={car.carName}
            />
          </div>

        {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
             
              rows="15"
             className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[50px]"
              defaultValue={car.description}
            ></textarea>
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <input
              type="text"
              name="category"
             
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              defaultValue={car.category}
            />
          </div>

        {/* rentPrice */}
          <div>
            <label className="label font-medium">Rent Price</label>
            <input
              type="text"
              name="rentPrice"
             
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              defaultValue={car.rentPrice}
            />
          </div>

        {/* Location */}
          <div>
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="location"
             
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              defaultValue={car.location}
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="label font-medium">Imgae Url</label>
            <input
              type="url"
              name="ImageUrl"
             
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              defaultValue={car.imageUrl}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF2D55] hover:scale-103 transition-all duration-200"
          >
            Update Car
          </button>
        </form>
      </div>
    </div>
       </div>



                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>  


    {/* delete button  */}

              <button onClick={hendleDelete}
                className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ShowListings;