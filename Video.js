import React from 'react'
import './Video.css'

const Video = ({id,srcValue,channel="Coder Dost",views,verified}) => {
  return(
   <div className='ChildContainerFlex'>
    <div className='Thumbnail'>
    <img src={srcValue} alt="" style={{height:170,width:250}}/>
    </div>
    <div className='channelName'>
    {id}.{channel}
    </div>
    <div className='Views'>
    {views}
    </div>
    <div className='Verified'>
     <div className='status'>{channel} {verified && '✅'}
     </div>
    </div>
   </div>
  )
}
export {Video}
