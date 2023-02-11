
import React from 'react'


const TextDescription = ({ description, setDescription }) => {
  return (
    <>
    <br/>
    <br/>
        <div className="container p-5">
        <br/>
          <div class="input-div mb-3  ">
            <textarea value={description} onChange={e => setDescription(e.target.value)} />

          </div>

        </div>


    </>
  )
}

export default TextDescription