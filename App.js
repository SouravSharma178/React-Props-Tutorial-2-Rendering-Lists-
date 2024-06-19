import React from 'react'
import './App.css';
import {Video} from './Components/Video'

const App = () => {
  let videos =[
  {
    id:1,
    src:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png",
    channel:"Man Utd",
    views:"25K",
    verified:false
  },
  {
    id:2,
    src:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/640px-Chelsea_FC.svg.png",
    channel:"Chelsea",
    views:"1M",
    verified:true
  },
  {
    id:3,
    src:"https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    channel:"GCP",
    views:"100M",
    verified:false
  }
]
  return(
  <div className='container'>

  {
     videos.map(e=><Video
      key={e.id}
      srcValue={e.src}
      views={e.views}
      verified={e.verified}
      channel={e.channel}
      id={e.id}
      >
      </Video>
      )
  }
  </div>
)
}
export default App;
