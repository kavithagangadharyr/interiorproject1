import React from 'react';
import winerydry from '../images/winerydry.jpg';
import './winery.css';

function WineryDryBuilding() {
  return (
    <div>
      <h2>Winery Dry Creek Building</h2>
      <p>The Dry Creek Building brings together key business partners in a common
         location and is designed to help drive collaboration and innovation,
          ultimately helping to move Gallo’s business forward. The new office
           building complements existing structures and is a central location
            between the campus’s multiple buildings, making is a vital hub for
             employees to gather, socialize, and collaborate.
             </p>
      <p>The building features a modern design with clean lines and sleek finishes,
          perfect for Gallo's brand aesthetic. The interior spaces are open and
          inviting, with plenty of natural light and flexible workspaces. The
          building also includes state-of-the-art technology and eco-friendly
          features, further emphasizing Gallo's commitment to innovation and
          sustainability. </p>
          <p><strong>Client:</strong> DLF</p>
      <p><strong>Category:</strong> Art Modern</p>
      <p><strong>Date:</strong> April 11, 2023</p>
      <p><strong>Website:</strong> bhedabharat50@gmail.com</p>
      <img src={winerydry} alt="winery drey building" style={{ maxWidth: "100%", height: "500px", width:"500px" }} />
    </div>
  );
}

export default WineryDryBuilding;

