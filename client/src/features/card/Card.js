import React from 'react';
import { Link } from 'react-router-dom';

export default function Card() {
  return (
    <div className="bg-white py-10 sm:py-32" style={{paddingTop:70,paddingBottom:10}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upcoming Comptetion</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <Link to='/UserInput'><p className='border-2 border-blue-600 inline-block bg-blue-600 rounded-lg px-3 py-2 text-white'>Register</p></Link>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <Link to='/UserInput'><p className='border-2 border-blue-600 inline-block bg-blue-600 rounded-lg px-3 py-2 text-white'>Register</p></Link>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <Link to='/UserInput'><p className='border-2 border-blue-600 inline-block bg-blue-600 rounded-lg px-3 py-2 text-white'>Register</p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


