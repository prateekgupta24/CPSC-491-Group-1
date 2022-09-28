import React from 'react';
import FaqStyle from '../styles/faq.style.js';


const Faq = () => {
  return (
    <FaqStyle>
      <div>
        <h1>Faq</h1>
        <ul>
          <li>What is this product?</li>
          <ul class="square">
            <li>This product is a website that allows users to look for a gym buddy to workout with.</li>
          </ul>
        </ul>
        <ul>
          <li>Who is this for?</li>
          <ul class="square">
            <li>Anyone who wants to find a buddy to workout with.</li>
          </ul>
        </ul>
          
      </div>
    </FaqStyle>
  );
}

export default Faq;