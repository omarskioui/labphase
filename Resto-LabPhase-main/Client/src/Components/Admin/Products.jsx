import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproducts } from '../../redux/action'
import axios from 'axios'

function Products() {

    const dispatch=useDispatch()
   const products = useSelector(state => state.products)
    useEffect(() => {
      dispatch(getproducts())
    },[products])
    const handledelete = async(id) => {
        try {
            const res=await axios.delete("http://localhost:5000/product/deleteproduct/"+id,{headers:{token:localStorage.getItem("token")}})
            if(res.status===200){
                alert("Product deleted successfully")
            }
        } catch (error) {
            console.log(error)
            alert("Failed to delete product")
        }
    }
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);
  
    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
      };
      const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage+1);
    };    
    console.log(products)
  return (
    <div id="reservationsView" className="view active">

        <div className="filters">
          <div className="date-filter">
            <input type="date" id="dateFilter" defaultValue="" />
          </div>
          <div className="search">
            <span className="material-icons">search</span>
            <input
              type="text"
              id="searchReservations"
              placeholder="Search reservations..."
            />
          </div>
         
        </div>
        <div className="reservations-grid">
          <table>
            <thead>
              <tr>
                <th>image</th>
                <th>name</th>
                <th>price</th>

                <th>category</th>
                <th>edit/delete</th>
               
              </tr>
            </thead>
            <tbody id="reservationsTable">
              
              {paginatedProducts.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img style={{width:"100px",height:"100px",borderRadius:"50%"}} src={product?.image[0]} alt="" />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                 
                  <td>
                    <button ><i className="fa-solid fa-pen-to-square"></i></button>
                    <button onClick={()=>handledelete(product._id)}><i className="fa-solid fa-trash"></i></button>
                  </td>

                  </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{marginTop:"5%",display:"flex",justifyContent:"center",gap:'20px'}}>
        <button onClick={handlePrevPage} style={{borderRadius:"8px",background:"black",width:"15%",height:"50px",padding:"2px",color:"white"}}>Previous</button>
        <button onClick={handleNextPage} style={{borderRadius:"8px",background:"black",width:"15%",height:"50px",padding:"2px",color:"white"}}>Next</button>
        </div>
      </div>
      
  )
}

export default Products