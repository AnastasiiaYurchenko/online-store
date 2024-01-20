import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
          <div className="descriptionbox-navigator">
              <div className="descriptionbox-nav-box">Description</div>
               <div className="descriptionbox-nav-box fade">Reviews(122)</div>
          </div>
          <div className="descriptionbox-description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae optio ex accusantium alias fugit, omnis rerum sed architecto in asperiores tempora voluptatibus doloremque fuga suscipit molestiae provident porro et itaque totam ad incidunt quibusdam? Deserunt ex porro dignissimos inventore reiciendis dicta praesentium perspiciatis odio cum, velit sint dolorum consectetur?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, natus exercitationem qui sequi soluta error veritatis dignissimos, nisi animi tenetur placeat esse magnam cum vel nostrum est mollitia culpa illum.</p>
          </div>
    </div>
  )
}

export default DescriptionBox