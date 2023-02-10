import { Button } from 'bootstrap'
import React from 'react'


const Index = () => {
  return (
    <>
    <br/>
    <br/>
      <form>
        <div className="container p-5">
        <br/>
          <div class="input-div mb-3  ">
            <label for="" class="form-label">Provide  Description text of image you are looking  for !</label>
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="waterfall above he cloud.." />
            <br/>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>

        </div>

      </form>

    </>
  )
}

export default Index