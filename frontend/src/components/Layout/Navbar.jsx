import React from 'react';
import styles from '../../styles/styles';
import {navItems} from '../../static/data';
import { Link } from 'react-router-dom';

const Navbar = ({ active }) => {
  return (
    <div className={`flex ${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((item, index) => (
          <div key={index} className="mr-4">
            <Link
              to={item.url}
              className={`${
                active === index + 1 ? 'text-[#000435]' : 'text-black'
              } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer`}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
