import React from 'react';
import facebook1 from '../Pictures/facebook-icon.jpeg';
import facebook2 from '../Pictures/facebook-icon.jpeg';
import facebook3 from '../Pictures/facebook-icon.jpeg';
import instagram from '../Pictures/instagram-icon.jpeg';

function Header() {
  return (
    <header style={{ height: '30px', width: '1240px', backgroundColor: '#f5f5f5' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Follow Us:</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={facebook1} alt="Facebook" style={{ marginRight: '10px' }} />
          <img src={facebook2} alt="Facebook" style={{ marginRight: '10px' }} />
          <img src={facebook3} alt="Facebook" style={{ marginRight: '10px' }} />
          <img src={instagram} alt="Instagram" style={{ marginRight: '10px' }} />
          <div>mahagadhimaitemple@gmail.com</div>
          <div style={{ marginLeft: '10px' }}>+977-9811102136</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
