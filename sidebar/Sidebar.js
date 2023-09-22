import React from 'react'
import './Sidebar.css'
import Video from '../video/Video'

function Sidebar() {
  return (
    <div className='sidebar'>
     <div className="sidebar-1">
<div className="s-1">
  <div className="ho">
  <span class="material-symbols-outlined">
home
</span>
<h4>Home</h4>
  </div>
  <div className="explore">
  <span class="material-symbols-outlined">
explore
</span>
<h4>Explore</h4>
  </div>
  <div className="sub">
  <span class="material-symbols-outlined">
subscriptions
</span>
<h4>Subscriptions</h4>
  </div>
  
</div> <hr />

<div className="ho">
<span class="material-symbols-outlined">
video_library
</span>
<h4>Library</h4>
  </div>
  <div className="explore">
  <span class="material-symbols-outlined">
history
</span>
<h4>History</h4>
  </div>
  <div className="sub">
  <span class="material-symbols-outlined">
videocam
</span>
<h4>Your Videos</h4>
  </div>
  <div className="ho">
  <span class="material-symbols-outlined">
timer
</span>
<h4>Watch later</h4>
  </div>
  <div className="explore">
  <span class="material-symbols-outlined">
thumb_up
</span>
<h4>Liked Videos</h4>
  </div>

</div>

     <div className="video">
  
      <Video/>
     </div>
    
    </div>
  )
}

export default Sidebar
