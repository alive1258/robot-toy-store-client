import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyCategory = () => {
    return (
        <div>
                 <Tabs>
    <TabList>
    <div className='flex justify-center items-center gap-6'>
    <Tab>RoboPets Toy</Tab>
      <Tab>RoboRacers toy</Tab>
      <Tab>RoboSidekicks toy</Tab>
    </div>
    </TabList>

    <TabPanel >
    <div className='flex gap-4 justify-center items-center'>
    <button>RoboDogs toy</button>
      <button>RoboCats toy</button>
      <button>RoboElephant toy</button>
    </div>
    </TabPanel>
    <TabPanel>
    <div className='flex gap-4 justify-center items-center'>
    <button>RoboCars Toy</button>
      <button>RoboMotorcycles Toy</button>
      <button>RoboJet Skis toy  </button>
    </div>
    </TabPanel>
    <TabPanel>
    <div className='flex gap-4 justify-center items-center'>
    <button>RoboTrusties toy</button>
      <button>RoboPals toy</button>
      <button>RoboAid Bots toy</button>
    </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ToyCategory;