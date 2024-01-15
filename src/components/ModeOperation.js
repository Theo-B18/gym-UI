import React from 'react'

const ModeOperation = () => {
  return (
    <div className='container'>
         <h1 className='text-center mt text-purple'>MODE OF OPERATIONS:</h1>
         <div className="text-center">
            <div className="flex-row">
                <div className="button-simi mt-exp">
                <button type="button" className='btn-btn-yellow-r-cut mr'>ONLINE MODE</button>
                <button type="button" className='btn-btn-yellow-l-cut ml'>PERSONAL COACH</button>
                </div>
            </div>
            <div className="flex-row">
                <div className="button-simi mt-exp">
                <button type="button" className='btn-btn-yellow-r-cut mr'>HOME COACH</button>
                <button type="button" className='btn-btn-yellow-l-cut ml'>REGULAR MODE</button>
                </div>
            </div>
         </div>
      
    </div>
  )
}

export default ModeOperation
