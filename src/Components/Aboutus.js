import React from "react";

const Aboutus = ()=>{
    return(

        <>
           <div className="container emp-profile">
               <form method="">
                   <div className="row">
                       <div className="col-md-4">
                       <div className="profile-img">

                       </div>



                       <div className="col-md-6">
           <div className="profile-head">
               <h5>Nirmal Singh</h5>
               <h6>web developer</h6>
               <p className="profile-rating mt-3 mb-5">Ranking:<span>1/10</span></p>

              <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab"   href="#home"   role="tab" aria-controls="home"  aria-selected="">About</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab"   href="#profile"   role="tab" aria-controls="profile" aria-selected="">Timeline</a>

                   </li>
              </ul>


           </div>
      </div>

      <div className="col-md-2">
          <input type="submit" className="profile-edit-btn" name="btnAddMore"  value="Edit profile"/>

             </div >

             </div >

           <div className="row">
               {/* left side url */}
           <div className="col-md-4">
           <div className="profile-work">
               <p>Work Link</p>
               <a href="https://www.youtube.com/watch?v=9zcMnJI3B7M" target="-nirmal">Youtube</a><br/>
               <a href="https://www.youtube.com/watch?v=9zcMnJI3B7M" target="-nirmal">Instagram</a><br/>
               <a href="https://www.youtube.com/watch?v=9zcMnJI3B7M" target="-nirmal">facebook</a><br/>
               <a href="https://www.youtube.com/watch?v=9zcMnJI3B7M" target="-nirmal">linked in</a><br/>
               <a href="https://www.youtube.com/watch?v=9zcMnJI3B7M" target="-nirmal">Twitter</a><br/>
               <a href="https://www.youtube.com/watch?v=9zcMnJI3B7M" target="-nirmal">whatsapp</a><br/>


               </div>
               </div>

             {/* right side data toggle */}

            <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabcontent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">



                 <div className="row"></div>
                 <div className="col-md-6">
                     <label >="USER ID"</label>
                 </div>
                 <div className="col-md-6"></div>
                 <p>676867669698978778</p>
                 </div>
                 </div>



                 <div className="row mt-3">
                 <div className="col-md-6">
                     <label >="name"</label>
                 </div>
                 <div className="col-md-6">
                 <p>Nirmal singh</p>

                 </div>
                 </div>

                 <div className="row mt-3">
                 <div className="col-md-6">
                     <label >="name"</label>
                 </div>
                 <div className="col-md-6">
                 <p>Nirmal singh</p>

                 </div>
                 </div>
                 <div className="row mt-3">
                 <div className="col-md-6">
                     <label >="name"</label>
                 </div>
                 <div className="col-md-6">
                 <p>Nirmal singh</p>

                 </div>
                 </div>
                 <div className="row mt-3">
                 <div className="col-md-6">
                     <label >="name"</label>
                 </div>
                 <div className="col-md-6">
                 <p>Nirmal singh</p>

                 </div>
                 </div>
                 <div className="row mt-3">
                 <div className="col-md-6">
                     <label >="name"</label>
                 </div>
                 <div className="col-md-6">
                 <p>Nirmal singh</p>

                 </div>
                 </div>
                 <div className="row mt-3">
                 <div className="col-md-6">
                     <label >="name"</label>
                 </div>
                 <div className="col-md-6">
                 <p>Nirmal singh</p>

                 </div>
                 </div>
    
                 <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                 <div class="row"></div>
                 <div class="col-md-6">
                     <label >="USER ID"</label>
                 </div>
                 <div class="col-md-6"></div>
                 <p>676867669698978778</p>
                 </div>
                 </div>




                 </div>
                 </div>
           
      </form>

      </div>


</>
        



    )
}

export default Aboutus;