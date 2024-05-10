
import React from 'react'
import './style.css'

const Record = ({catagory,popular,FilterBtn}) => {
  return (
    <div>
       <div className="main">
      <div className="header">
        <div className="logo">
          <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" className="img-flueid"></img></a>
        </div>
        <div className="manu">
          <ul>
           
            {
              catagory.map((manu) => {
                return (
                  <li key={manu.id}>
                  <a href="#">
                    <button  onClick={ () => FilterBtn(manu.cate)}>{manu.cate}</button>
                  </a>
                </li>

                )
              })
            }
          </ul>
        </div>
      </div>
      <div className=" section d-flex">
        <div className="col-2">
        <div className="todo">
          <h4 className="ps-3 m-0">Filters</h4>
          <h6 className="ps-3 m-0">Catagoris</h6>
          <ul>
            <li>
                <button onClick={ () => FilterBtn("all")}>All</button>
            </li>
            {
              catagory.map((todo) => {
                return (
                   <li key={todo.id}>
                   <button   onClick={ () => FilterBtn(todo.cate)}>
                   <a href="#">
                      <img src={todo.icon}></img>{todo.cate}</a>
                   </button>
                  </li>
                )
              })
            }

          </ul>
        </div>
        </div>

        <div className="col-10 ">
         <div className="popular">
         <h2 className="ps-3">Popular</h2>
         <div className="col-12 d-flex flex-wrap">
         
          {
            popular.map((pop)=>{
              return (
                <div key={pop.id} className="col-12 col-md-6 col-lg-3 p-2 ">
                <div className=" card align-items-center">
                  <img src={pop.image} className="img-fluid"></img>
                  <div className="content">
                    <h4>{pop.title}</h4>
                    <h5>{pop.catagory}</h5>

                    <img src={pop.logo}></img>
                    <p>₹{pop.price }</p>
                    <span>{pop.rate}
                    <img src={pop.ricon}></img>
                    </span>
                    <p className="fs-6">{pop.delivery}</p>
                  </div>
                </div>
              </div>
              )
            })
          }

           
            
          </div>
         </div>
         


        </div>
      </div>

    </div>
    </div>
  )
}

export default Record
