import React from "react";
import "./ThreeThings.css";

const ThreeThings = () => (
  //     <div className="ui grid container">
  //   <div className="ui relaxed divided items">
  //     <div className="item">
  //       <div className="middle aligned content">
  //         <h1 className="ui header">
  //         Always Remember...
  //         {/* <span className="disabled">It'll blow your mind.</span> */}
  //         </h1>
  //         <div className="description">
  //           <p className="info-text">
  //             A revolutionary way to remember loved ones
  //           </p>
  //         </div>
  //       </div>
  //       <div className="ui right floated large image">
  //         <img src="http://placekitten.com/g/400/200" />
  //       </div>
  //     </div>
  //     <div className="item">
  //       <div className="ui large image">
  //         <img src="http://placekitten.com/g/400/200" />
  //       </div>
  //       <div className="middle aligned content">
  //         <h1 className="ui header">
  //         Everlasting Memories...
  //          {/* <span className="disabled">it's that good.</span> */}
  //         </h1>
  //         <div className="description">
  //           <p className="info-text">
  //           Share precious moments with friends and loved ones
  // 	        through an easy to use interface

  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="media">
  //       <div className="middle aligned content">
  //         <h1 className="ui header">
  //         Build Your Family Tree...
  //           {/* <span className="disabled">this one.</span> */}
  //         </h1>
  //         <div className="description">
  //           <p className="info-text">
  //           Through the process of connecting with loved ones and friends you build connections which can expand your circle of memories
  //           </p>
  //         </div>
  //       </div>
  //       <div className="ui right floated large image">
  //         <img src="http://placekitten.com/g/400/200" />
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <div className="container">
    <div class="media">
      <div class="media-left">
        <img
          src="https://www.dailydot.com/wp-content/uploads/ad2/5c/a3ede15d59bb88dd7ca77b797b017b4d.jpg"
          style={{ height: "250px", width: "396px" }}
          class="media-object-img"
        />
      </div>
      <div class="media-body">
        <h4 class="media-heading">Remember Always... </h4>
        <p>
          A gentle, new way to remember your loved ones. Here, you create a tribute
          page and give those whose lives were affected by the beloved an opportunity to share
          fond memories, and those who remember can pay respects always. Whether you're a
          relative, friend, old associate, even anything in between, you can
          share your experiences and pat tribute and meaning to a life that can be
          remembered for generations.{" "}
        </p>
      </div>
    </div>
    <div class="media">
      <div class="media-body-middle">
        <h4 class="media-heading">Eternal Memories...</h4>
        <p>
          Share cherished moments with loved ones with this easy-to-use interface. 
          Friends and family will be able to create "posts" on a Tribute's
          page, which can in turn be commented on and liked. Maybe there is a story you'd
          like to share about how a person made an impact on your life, reminisce about  
          memories you shared together. This is a new way to pay tribute to someone's legacy the way they deserved to be
          remembered!
        </p>
      </div>
      <div class="media-right">
        <img
          src="https://assets.community.lomography.com/76/a217bcaa5d1a0bc3bcb0a0ada6cea2f91b4b6a/536x256x2.jpg?auth=146b56ba673774689d6a7727b47b98c67cecf19e"
          style={{ height: "250px", width: "396px" }}
          class="media-object-img"
        />
      </div>
    </div>
    <div class="media">
      <div class="media-left">
        <img
          src="https://travelbugster.files.wordpress.com/2012/05/img7384tonemapped-x2.jpg"
          style={{ height: "250px", width: "396px" }}
          class="media-object-img"
        />
      </div>
      <div class="media-body">
        <h4 class="media-heading">Build Your Family Tree...</h4>
        <p>
          Connecting with others, loved ones and friends, you can
          build connections to expand the circle of memories around the loved one. 
          Upcoming generations are given access to first-hand accounts
          of ancestors. The more that people connect and share, the more filled and rich
          the family tree will be.
        </p>
      </div>
    </div>
  </div>
);

export default ThreeThings;