import React from 'react'

type CarProp = {
    name : string,
    id : number,
    origin : string
}

function Car(car : CarProp) {
  return (
    <div>Car: {car.name}</div>
  )
}

export default Car