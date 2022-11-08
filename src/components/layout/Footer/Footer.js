import React from 'react'
import styles from "./footerstyle.module.css"
const Footer = () => {
  return (
    <div>
        <footer className='w-3/4 m-auto pt-4'>
        
        <hr className='pb-4'></hr>
        <div className='m-auto w-2/4 mt-6'>
            <ul className=' w-1/4 text-2xl font-bold flex w-1/2 justify-between m-auto'>
                <li>
                   O 
                </li>
                <li>
                   L
                </li>
                <li>
                   S 
                </li>
                <li>
                   E
                </li>
                <li>
                   N
                </li>
            </ul>
            <p className='tracking-tighter text-center text-gray-400'>
            <a className={styles.Styletheme}>Olsen WordPress Theme</a>
            <span className='mx-1'>by</span> 
            <a className={styles.Styletheme}> CSSIgniter</a>
            </p>
              
               
                 
        </div>

        </footer>


    </div>
  )
}

export default Footer