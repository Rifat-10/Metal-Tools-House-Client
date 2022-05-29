import React from "react";
import myImage from "../Images/6.jpg"

const MyPortfolio = () => {
  return (
    <div className='lg:w-1/2 mx-auto my-5 bg-base-300 pb-10 '>
      <img className="mx-auto pt-5 rounded-3xl shadow-lg" src={myImage} alt='' width={300} height={300}/>
      <h2 className='text-2xl font-bold my-3'>Md.Mehedi Hassan</h2>
      <h3 className='text-xl py-1'>mehedihassanrifat.3@gmail.com</h3>
      <div className='lg:w-1/2 w-80 mx-auto text-left'>
        <div className='text-xl py-1 text-left'>
          <p className='font-bold'>
            As-Salamu Alaikum, <br />
          </p>
          <div className='my-2 text-lg'>
            <p className='py-1'>
            Hi ..I am MD.Mehedi Hassan.My Nick name is Rifat I am from Bhandaria ,Pirojpur, Barisal. I love to explore and and learn new things. i believe that learning comes from inner-self. i'am a self-learner .I'am a student of science background.Currently i am studying at Daffodil International University of Computer Science and Engineering department under F.S.I.T faculty. 
            </p>
            <p className='py-1'>
              I have passed my SSC in 2015 from Bhandaria Bihari Pilot School and
              College and passed with the CGPA of 4.89.
            </p>{" "}
            <p className='py-1'>
            I have passed my HSC in 2017 from Bhandaria Govt
              College and passed with the CGPA of 4.50.
            </p>
            <p className='py-1'>
              Recently I have just Completed my BSc in CSE from Daffodil
              International University with the CGPA of 3.50.
            </p>
          </div>
        </div>
        <div className='text-xl'>
          <span className='text-black font-bold'>Tecnologies :</span> <br />
          <p className='pl-5 '>
            Javascript,React, NodeJs, Express, MongoDB, MySQL, Bootstrap,
            Telwinde.
          </p>
        </div>
      </div>
      <div className='text-left lg:w-1/2 w-80 mx-auto'>
        <p className='text-left font-bold pt-3 text-black'>
          Three of my best websites :{" "}
        </p>
        <p className='pl-5'>https://sportswear-city.web.app</p>
        <p className='pl-5'>https://metal-tools-house.web.app/</p>
        <p className='pl-5'>https://sportspix-d6cc7.web.app/ </p>
      </div>
    </div>
  );
};

export default MyPortfolio;
