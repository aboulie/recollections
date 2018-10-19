import React from 'react'
import './Footer.css'

export default () => {
  return (
    <footer>
       <div className="container-fluid footer-wrapper">
        <div className="container">
          <div className="row footer-row">
            <div className="col left-column">
                  <h5>Recollections of Our Loved Ones</h5>
                  <p  id='lb-text'>A way to commemorate loved ones</p>
                  <p  id='lb-text'>Created with the sole purpose of preserving forever lasting memories</p>
              </div>

              <div className="col mid-column">
                <h5>Contributor</h5>
                {/* <p id="contributor-text" > */}
                <div className="row">
                <div className="col"></div>
                  <a target="_blank" rel='noreferrer noopener' id="cool-link" className='col footer-link' href="https://github.com/aboulie">Dareen Mohamad</a>
                  <br></br>
                  <div className="col"></div>
                  </div>


              <div className="col right-column">
                <h5>Check Out the Code</h5>
                <div className="row">
                <div className="col"></div>
                  <p id="code-text" className="col">
                    <a target="_blank" rel='noreferrer noopener' className='footer-link'id="cool-link" href="https://github.com/aboulie/recollections">GitHub</a>
                   
                   {/* <br></br> 
                   <br></br>
                   <br></br> */}

                  </p>
                  <div className="col"></div>
                  </div>
                  <div className="row copyright">
                  <div className="col">
                   Copyright &copy; {new Date().getFullYear()} Recollections
                   </div>
</div>
              </div>
            </div>
          </div>
       </div>

        <div className=" footer-lower">
          <h5 className="white-footer text">All Rights Reserved</h5>
    
        </div>
</div>
    </footer>
  );
};