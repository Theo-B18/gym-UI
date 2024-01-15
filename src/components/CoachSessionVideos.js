import React from 'react'
import ReactPlayer from 'react-player'

const CoachSessionVideos = () => {
  return (
    <div>
       <h1 className="text-center mt title mb"> {'Coach Jerry Sessions'} </h1>
        <div className="row flex-row">
            <div className="card-card box-shadow-purple" style={{marginRight:10}}>
            <ReactPlayer width={250} height={200}  url={'https://www.youtube.com/watch?v=CqTtScFQ5-c'}  controls={true}></ReactPlayer>
                <div className="card-text p-4">
                <h5 className="text-center">{'Standing Posture'}</h5>
                
                </div>

            </div>
            <div className="card-card box-shadow-purple" style={{marginRight:10}}>
                <div className="card-video" >
                <ReactPlayer width={250} height={200}  url={'https://www.youtube.com/watch?v=pc2xlLuCp4Y'}  controls={true}></ReactPlayer>
                </div>
                <div className="card-text p-4">
                <h5 className="text-center"> {'Every Morming Routine'} </h5>
                 
                </div>

            </div>
            <div className="card-card box-shadow-purple" style={{marginRight:10}}>
                <div className="card-video">
                <ReactPlayer width={250} height={200}  url={'https://www.youtube.com/watch?v=G-Zo832gbWo'}  controls={true}></ReactPlayer>
                </div>
                <div className="card-text p-4">
                <h5 className="text-center"> {'Lounges Posture'} </h5>
                 
                </div>

            </div>
            <div className="card-card box-shadow-purple" style={{marginRight:10}}>
                <div className="card-video">
                <ReactPlayer width={250} height={200}  url={'https://www.youtube.com/watch?v=q8c_52moIVg'}  controls={true}></ReactPlayer>
                </div>
                <div className="card-text p-4">
                <h5 className="text-center"> {'Avoid Back Pain'} </h5>  
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CoachSessionVideos
