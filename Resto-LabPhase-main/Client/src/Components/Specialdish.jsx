import React, { useState } from 'react'
import { useSelector } from 'react-redux'


function Specialdish() {
  const products=useSelector(state=>state.products)
   const [show,setShow]=useState()
  return (
    <div>
      <section className="special-dish text-center" aria-labelledby="dish-label">
        <div className="special-dish-banner">
          <img
            src="./assets/images/special-dish-banner.jpg"
            width={940}
            height={900}
            loading="lazy"
            alt="special dish"
            className="img-cover"
          />
        </div>
        <div className="special-dish-content bg-black-10">
          <div className="container">
            <img
              src="./assets/images/badge-1.png"
              width={28}
              height={41}
              loading="lazy"
              alt="badge"
              className="abs-img"
            />
            <p className="section-subtitle label-2">Special Dish</p>
            <h2 className="headline-1 section-title">Lobster Tortellini</h2>
            <p className="section-text">
              An indulgent pasta dish made up of simple flavours.
               The luxurious lobster spaghetti recipe brings together garlic,
                chillies, parsley and a glug of olive oil.
            </p>
            <div className="wrapper">
              <del className="del body-3">30000</del>
              <span className="span body-1">20000</span>
            </div>
            <div>
            {show && products.filter(el=>el.category=='Appetizers').slice(Math.floor(products.filter(el=>el.category=='Appetizers').length/2)).map(el=>
            <a
             onClick={()=>setShow(true)}  className="btn btn-primary">
              <span className="text text-1">View All Menu</span>
              <span className="text text-2" aria-hidden="true">
                View All Menu
              </span>
            </a>
            )}
            </div>
          </div>
        </div>
        <img
          src="/assets/images/shape-4.png"
          width={179}
          height={359}
          loading="lazy"
          alt=""
          className="shape shape-1"
        />
        <img
          src="/assets/images/shape-9.png"
          width={351}
          height={462}
          loading="lazy"
          alt=""
          className="shape shape-2"
        />
      </section>

    </div>
  )
}

export default Specialdish