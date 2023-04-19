import React from 'react';
import winerydry from '../images/winerydry.jpg';
import './bedroom.css'

function BedroomInteriorPotWork() {
  return (
    <div>
      <h2>Bedroom Interior Pot Work</h2>
      <p>The Dry Creek Building brings together key business partners
         in a common location and is designed to help drive collaboration
          and innovation, ultimately helping to move Gallo’s business forward.
           The new office building complements existing structures and is a
            central location between the campus’s multiple buildings, making
             is a vital hub for employees to gather, socialize, and collaborate.</p>
             <p class="bold">Client: Samarth</p>
<p class="bold">Category: Modern</p>
<p class="bold">Date: Octomber 19, 2021</p>
<p class="bold">Website: bhedabharat50@gmail.com</p>

<img src={winerydry} alt="winery drey building" style={{ maxWidth: "100%", height: "500px", width:"500px" }} />
    </div>
  );
}

export default BedroomInteriorPotWork;
