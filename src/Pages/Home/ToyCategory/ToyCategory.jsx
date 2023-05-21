import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import './ToyCategory.css'
import ToyShop from '../../ToyShop/ToyShop';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ToyCategory = () => {
    const [toyShops, setToyShops] = useState([])
    const [activeTab, setActiveTab] = useState("RoboPets")
    useEffect(() => {
        AOS.init();
      }, []);
      

    useEffect(() => {
        fetch(`https://robot-toy-store-server.vercel.app/products/${activeTab}`)
            .then(res => res.json())

            .then(data => {
                setToyShops(data)
                console.log(data)

            })
    }, [activeTab])
    console.log(activeTab)


    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }


    return (
        <div className='mt-20 md:px-20 px-6'>
            <div data-aos="fade-right" className='text-center mb-10'>
                <h1 className='text-4xl font-bold text-[#1A3D37] mb-4'>Toy Category</h1>
                <p>
                    Welcome to our vast selection of robot toys, where you'll find a diverse range of categories  to explore <br /> and
                    choose from. Step into a world of robotic wonder and discover the perfect toy category <br /> to suit your
                    interests and ignite your imagination.</p>
            </div>

            <div>
                <div className='flex justify-center items-center gap-6'>
                    <div onClick={() => handleTabClick("RoboPets")}
                        className={`tab  RoboPets${activeTab == "RoboPets" ? "bg-gray-400 text-white font-bold" : ""
                            }`}
                    >RoboPets Toy</div>
                    <div onClick={() => handleTabClick("RoboRacers")}
                        className={`tab  RoboRacers${activeTab == "RoboRacers" ? "bg-gray-400 text-white font-bold" : ""
                            }`}

                    >RoboRacers toy</div>
                    <div onClick={() => handleTabClick("RoboWizards")}
                        className={`tab  RoboWizards${activeTab == "RoboWizards" ? "bg-gray-400 text-white font-bold" : ""
                            }`}

                    >RoboWizards toy</div>
                </div>
            </div>



 
    <div className='grid md:grid-cols-2 gap-8 justify-center rounded-xl md:px-20 items-center mt-8 bg-gray-100 py-10'>
                {
                    toyShops.map(toyShop => <ToyShop key={toyShop._id} toyShop={toyShop}></ToyShop>)
                }
            </div>






        </div>

    );
};

export default ToyCategory;