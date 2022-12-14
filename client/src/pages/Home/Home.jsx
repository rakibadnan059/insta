import React, { useContext } from 'react'

import TopBar from '../../components/TopBar/TopBar'
import AuthContext from '../../context/AuthContext'// import Authtemp from '../AuthTemp/Authtemp'
import './Home.scss'
import cookie from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import LoderContext from '../../context/LoaderContext'

const Home = () => {

   //!loder get
   const {LoderDispatch} = useContext(LoderContext)

   // use auth context
   const {dispatch, user}= useContext(AuthContext);

   const navigate = useNavigate();

  //todo handleUserLogout
  const handleUserLogout = (e) => {
      e.preventDefault();
      cookie.remove('token');
      cookie.remove('user');
      dispatch({type : 'LOGOUT_USER'});
      navigate('/login');
      LoderDispatch({type : "LODER_START"})

  }

  return (
    <>
      <TopBar/>
      {/* <Authtemp/> */}

      <div className="home-container">
         <div className="home-wraper">
            <div className="time-line">
                <div className="post-card">
                    <div className="post-card-header">
                       <div className="post-user-info">
                              <img src="https://tuwebsoluciones.com/wp-content/uploads/2018/03/team-member-1.jpg" alt="" />
                            <div className="user-dtls">
                                <a className='user-name' href="/">Rakib Adnan</a>
                                <span className="user-location">Dhaka, Bangladesh</span>
                            </div>
                         </div>
                           <div className="post-opt-btn">
                              <button><svg aria-label="More options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></button>
                           </div>
                     </div>
                          <div className="post-card-image">
                            <img src="https://27rywd1v8l2xv13032ubkf91-wpengine.netdna-ssl.com/wp-content/uploads/2022/01/Transformation-Leaderhip-Traits.jpg" alt="" />
                          </div>

                     <div className="timeline-icons">
                         <div className="icon-left">
                            <a href="#"><svg aria-label="Like" class="_ab6-" color="#000000" fill="#000000" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></a>


                            <a  href="#"><svg aria-label="Comment" class="_ab6-" color="#000000" fill="#000000" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></a>

                            <a href=""><svg aria-label="Share Post" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>
                        </div>
                           <div className="icon-right">
                            <a href="#"><svg aria-label="Save" class="_ab6-" color="#000000" fill="#000000" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>
                        </div>
                    </div>  
                     <div className="post-deatils">
                        <span className="like">133 Likes</span>
                        <div className="post-content">
                           <a href="#">@rakibadnan</a> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam blanditiis nesciunt iusto itaque repellat magni perferendis illo neque placeat ratione.
                      </div> 
                        <div className="post-comment">
                           <span>View all 44 comments</span>
                      </div>
                      <div className="post-time">
                        <span>1 day ago</span>
                        </div>     
                      </div>  
                     <div className="post-comments-aria">
                        <a href="#"><svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg></a> 

                           <input type="text" placeholder="Add a comment..." />
                           <button className="btn-comment">Post</button>
                        
                        </div>                         
                </div>     
            </div>
               <div className="user-info">
                  <div className="user-details">
                     <div className="user-image">
                     <img src={user.photo ? user.photo : 'https://img.freepik.com/premium-vector/young-man-avatar-cartoon-character-profile-picture_18591-55055.jpg?w=2000'} alt="" />
                     </div>
                     <div className="user-name">
                        <h3>{user.name}</h3>
                        <p>{user.username}</p>
                        <a  href="#" onClick={handleUserLogout} >LogOut</a>
                        </div>
                  </div>
               </div>
         </div>
      </div>
   </>
  )
}

export default Home