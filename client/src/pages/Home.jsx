import {motion, AnimatePresence } from 'framer-motion';
import {useSnapshot} from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import { 
headContainerAnimation,
headContentAnimation,
headTextAnimation,
slideAnimation } from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home'{...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img
              src='threejs.png'
              alt="Logo Three.js"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div {...headTextAnimation}>
            <h1 className='head-text'>
              LET'S <br className='xl:block hidden'/> START IT
            </h1>
            <motion.div
              {...headContentAnimation}
              className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Make your own 3D design with unque tools and features,
                <strong> Unleash your mind</strong> {""}
                and make your own style.
              </p>
              <CustomButton
                type='filled'
                tittle=" Start !" 
                handleClick={() => state.intro = false}
                customStyles= "w-fit px-4 py-2.5 font-bold text-sm" 
                />
              
            </motion.div>
          </motion.div>
        </motion.section>
  )
}
    </AnimatePresence >
  )
}

export default Home