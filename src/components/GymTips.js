import React from 'react'
// import ReactPlayer from 'react-player'
import '../index.css'
import theoImg from '../images/JCXS2291.JPG'

// const homeVideoStyle = {
//   position:'absolute',
//   width: 100,
//   height: 150,
// }

const GymTips = () => {
  return (
    <div className='container '>
        <div className="flex-box">
        <div className="col-sm mt-lg">
               <img src={theoImg} alt="" sizes="" srcset="" />
          </div>
        <div className="col-fit mt-lg">
            <div className="text-fomat">
            <h2 className='header text-center'> Message From THEO</h2>
             <p className="paragraph paragraph-black">
             The quality of your health determines the quality of your life and nothing is more important than that. exercitationem quos sunt perferendis possimus molestiae aliquam pariatur. Ipsam reprehenderit eos repellat, saepe voluptatum excepturi molestiae quidem vero, commodi, eligendi inventore praesentium aperiam natus? Quisquam delectus, sint molestias nesciunt laboriosam sed repellendus beatae quidem ad sunt cum cumque? Consectetur velit laborum ducimus ex eveniet hic reprehenderit nesciunt fuga.
             </p>
             <p className="paragraph paragraph-black mt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias animi eos exercitationem quos sunt perferendis possimus molestiae aliquam pariatur. Ipsam reprehenderit eos repellat, saepe voluptatum excepturi molestiae quidem vero, commodi, eligendi inventore praesentium aperiam natus? Quisquam delectus, sint molestias nesciunt laboriosam sed repellendus beatae quidem ad sunt cum cumque? Consectetur velit laborum ducimus ex eveniet hic reprehenderit nesciunt fuga.
             </p>
            </div>
            
          </div>
        </div>
       
     {/*    <ReactPlayer style={homeVideoStyle}  url={'../images/IMG_0017.MOV'}  controls={true} /> */}
    </div>
  )
}

export default GymTips
