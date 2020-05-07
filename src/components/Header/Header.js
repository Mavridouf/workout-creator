import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <div className='row'>
        <div className='col-6 d-flex align-items-center'>
          <span className='holy'>holy</span>&nbsp;
          <span className='test'>test</span>
        </div>
        <div className='col-6 d-flex align-items-center justify-content-end'>
          <span className='userName'>Montana</span>
          <div className='circle d-flex align-items-center justify-content-center'>
            <img src="https://img.icons8.com/dusk/64/000000/circled-user-female-skin-type-5.png" alt="User Avatar" />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 divider'></div>
      </div>
    </div>
  );
}

export default Header;