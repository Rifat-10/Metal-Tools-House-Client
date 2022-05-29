import React from "react";
import Capabilities from "../../Images/tools2.jpg";

const OurCapabilities = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <div className="lg:mx-5">
        <div className='hero min-h-full bg-base-200 rounded-lg'>
          <div className='hero-content flex lg:flex-row'>
            <div className='lg:w-1/2'>
              <img src={Capabilities} className='lg:max-w-lg rounded-lg shadow-2xl' />
            </div>
            <div className='lg:w-1/2 text-black'>
              <h1 className='lg:text-5xl text-3xl  font-bold'>Our Capabilities</h1>
              <p className='py-6'>
                Get motivated right now and do something about it. Metal Tools House production skills let you turn your ideas into reality. With over four decades of expertise in supplying and manufacturing, we are confident in our abilities.
              </p>
              <button className='btn btn-primary'>Go To Tools</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCapabilities;
