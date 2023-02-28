import React from 'react'

const ScoreCard = (props) => {
  return (
    <>
      <div className="score-card">
        <div className=" container">
          <div className="row">
            <div className="col-12 col-md-8 col-sm-12 col-lg-5 mx-auto">
              <div className="card">
                <div className="score d-flex justify-content-between px-3 py-2">
                  <img src={props.img} height="33" alt='' />
                  <p id="p-text">{props.title}</p>
                  <p id="total-que">{props.score}</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default ScoreCard
