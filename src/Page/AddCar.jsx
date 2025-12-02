import React, { use } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-toastify';

const AddCar = () => {
    const {user}=use(AuthContext);


    const hendelSubmit = (e)=>{
        e.preventDefault()

        const newCar ={
            carName: e.target.name.value,
            description: e.target.description.value,
            category: e.target.category.value,
            rentPrice: e.target.rentPrice.value,
            location: e.target.location.value,
            imageUrl: e.target.ImageUrl.value,
            providerName: user.displayName,
            providerEmail: user.email,
            status: "available",
            postedAt: new Date()
        }
        console.log({newCar})
        fetch("https://my-assignment10-server.vercel.app/cars",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newCar)
        })
        .then(res =>res.json())
        .then(data =>{
            toast.success("Your Car Add Successfull")
            console.log(data)
        })
        .catch(error =>console.log(error))
        e.target.reset()
    }



    return (
       <div className='bg-red-200 p-5'>
         <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl ">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Car</h2>
        <form onSubmit={hendelSubmit} className="space-y-4 ">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Car Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter car name"
            />
          </div>

        {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              required
              rows="15"
             className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[100px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Vehicles">Sedan</option>
              <option value="Plants">SUV</option>
              <option value="Foods">Hatchback</option>
              <option value="Home & Living">Luxury</option>
              <option value="Characters">Electric</option>
            </select>
          </div>

        {/* rentPrice */}
          <div>
            <label className="label font-medium">Rent Price</label>
            <input
              type="text"
              name="rentPrice"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Your Price"
            />
          </div>

        {/* Location */}
          <div>
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Your Location"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="label font-medium">Imgae Url</label>
            <input
              type="url"
              name="ImageUrl"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF2D55] hover:scale-103 transition-all duration-200"
          >
            Add car
          </button>
        </form>
      </div>
    </div>
       </div>
    );
};

export default AddCar;