import React ,{useState} from 'react'
import Navbar from '../components/Navbar';
import webImage from '../assets/images/image-web-3-desktop.jpg'
import mobileImage from '../assets/images/image-web-3-mobile.jpg'
import firstImage from '../assets/images/image-retro-pcs.jpg'
import secondImage from '../assets/images/image-top-laptops.jpg'
import thirdImage from '../assets/images/image-gaming-growth.jpg'
 const Homepage = () => {
  const [showMenu,setShowMenu] =useState(false)
  return (
    <div className="bg-white py-8 md:py-16 px-4 md:px-16 w-full md:w-[90%] flex flex-col mx-auto ">
      <Navbar setShowMenu={setShowMenu}/>
      <div className="flex md:gap-6 flex-col md:flex-row my-10">
        <div className="w-full md:w-[70%]">
          <img
            src={webImage}
            alt="desktopImage"
            className="hidden md:block  w-full object-cover"
          />
          <img
            src={mobileImage}
            alt="mobileImage"
            className="block md:hidden"
          />
          <div className="md:flex mt-4">
            <div className="w-full md:w-[50%]">
              <p className="text-5xl md:text-6xl md:w-[80%] font-bold">
                The Bright Future of Web 3.0?
              </p>
            </div>
            <div className="w-full md:w-[50%]">
              <p className="md:text-xl mt-4 md:mt-0">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="uppercase bg-orange-600 text-md text-white py-2 px-6 font-semibold mt-6 hover:bg-black transition-all ">
                read more
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[30%] bg-black px-4 pt-6 mt-6 md:mt-0">
          <p className="text-orange-300 text-4xl font-bold py-2">New</p>
          <div className="divide-y divide-white/60">
            <div className="py-8">
              <p className="text-white text-xl font-semibold cursor-pointer hover:text-orange-300 transition-colors">
                Hydrogen VS Electric Cars
              </p>
              <p className="text-white/60 text-lg mt-2">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="py-8">
              <p className="text-white text-xl font-semibold cursor-pointer hover:text-orange-300 transition-colors">
                The Downsides of AI Artistry
              </p>
              <p className="text-white/60 text-lg mt-2">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="py-8">
              <p className="text-white text-xl font-semibold cursor-pointer hover:text-orange-300 transition-colors">
                Is VC Funding Drying Up?
              </p>
              <p className="text-white/60 text-lg mt-2">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-16   mt-4  ">
        <div className="flex gap-4  w-full md:w-[330px]">
          <img
            src={firstImage}
            alt="firstImg"
            className="w-24 h-32 object-cover"
          />
          <div>
            <p className="text-4xl font-bold text-gray-300">01</p>
            <p className="text-lg font-bold my-2">Reviving Retro PCs</p>
            <p className=" text-gray-400 text-md">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex gap-4  w-full md:w-[330px]">
          <img
            src={secondImage}
            alt="firstImg"
            className="w-24 h-32 object-cover"
          />
          <div>
            <p className="text-4xl font-bold text-gray-300">02</p>
            <p className="text-lg font-bold my-2">Top 10 laptops of 2022</p>
            <p className=" text-gray-400 text-md">
              Our best pics for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex gap-4  w-full sm:w-[330px] ">
          <img
            src={thirdImage}
            alt="firstImg"
            className="w-24 h-32 object-cover"
          />
          <div>
            <p className="text-4xl font-bold text-gray-300">03</p>
            <p className="text-lg font-bold my-1.5">The Growth of Gaming</p>
            <p className="  text-gray-400 text-sm">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className={`w-full my-[-64px] mx-[-16px] ${showMenu ? 'block':'hidden'}  min-h-screen pb-16 bg-black/30 absolute flex flex-row-reverse sm:hidden`}>
        <div className="w-[70%] min-h-screen bg-white ">
          <div className="flex flex-row-reverse mt-16 px-4">
            <button onClick={()=>setShowMenu(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul className="mt-16">
            <li className="font-medium text-xl py-4 px-6">Home</li>
            <li className="font-medium text-xl py-4 px-6 ">New</li>
            <li className="font-medium text-xl py-4 px-6">Popular</li>
            <li className="font-medium text-xl py-4 px-6">Trending</li>
            <li className="font-medium text-xl py-4 px-6">Categories</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Homepage

