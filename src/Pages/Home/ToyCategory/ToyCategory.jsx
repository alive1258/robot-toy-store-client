import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ToyCategory.css'
import ToyShop from '../../ToyShop/ToyShop';

const ToyCategory = () => {
    const [toyShops, setToyShops] = useState([])
    const [activeTab, setActiveTab] = useState("RoboPets")

    useEffect(() => {
        fetch(`https://robot-toy-store-server.vercel.app/products/${activeTab}`)
        // fetch('https://robot-toy-store-server.vercel.app/products')
            .then(res => res.json())
          
            .then(data => {
                setToyShops(data)
                console.log(data)
               
            })
    }, [activeTab])
    console.log(activeTab)
  
        // const result = toyShops?.filter(toyShop => toyShop.subCategory == activeTab)
        // console.log(result)
     
        // setToyShops(result)

  
   
    
   

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }


    return (
        <div className='mt-20 md:px-20 px-6'>
            <div className='text-center mb-10 '>
                <h1 className='text-4xl font-bold text-[#1A3D37]'>Toy Category</h1>
                <p></p>
            </div>
         
                <div>
                    <div className='flex justify-center items-center gap-6'>
                        <div onClick={() => handleTabClick("RoboPets")}
                            className={`tab tab1 RoboPets${activeTab == "RoboPets" ? "bg-red-400 text-white" : ""
                                }`}
                        >RoboPets Toy</div>
                        <div onClick={() => handleTabClick("RoboRacers")}
                            className={`tab tab1 RoboRacers${activeTab == "RoboRacers" ? "bg-red-400 text-white" : ""
                                }`}

                        >RoboRacers toy</div>
                        <div onClick={() => handleTabClick("RoboSidekicks")}
                            className={`tab tab1 RoboSidekicks${activeTab == "RoboSidekicks" ? "bg-red-400 text-white" : ""
                                }`}

                        >RoboSidekicks toy</div>
                    </div>
                </div>
        

               
                <div className='grid md:grid-cols-3 gap-4 justify-center items-center mt-8'>
                    {
                        toyShops.map(toyShop => <ToyShop key={toyShop._id} toyShop={toyShop}></ToyShop>)
                    }
                </div>
                  
                
             
               
              
            </div>
       
    );
};

export default ToyCategory;