// import React from 'react'
// import PropTypes from 'prop-types'

// function DrawingDetail(props) {
//   const { keg } = props;
//   return (
//     <React.Fragment>
//       <div className="card shadow-lg w-75 mx-auto" style={{fontSize: 24, color: "black"}}>
//         <div className="headingFont card-header text-center text-black" style={{fontSize: 24, backgroundColor: "#ffdcd2", color: "black"}}><em>Keg Details</em></div>
//           <div className="card-body">
//             <div class="row">
//               <h2><strong>{keg.brand}</strong></h2>
//             </div>
//             <h3><strong>{keg.name}</strong></h3>
//             <h5><em>{keg.region}</em></h5>
//             <hr />
//             <p>ABV: <em>{keg.abv}%</em></p>
//             <p>IBU: <em>{keg.ibu}</em></p>
//             <p>Price: <em><strong>${keg.price}</strong></em></p>
//           </div>
//           <div className="card-footer justify-content-center" style={{backgroundColor: "white"}}>
//           </div>
//         </div>
//     </React.Fragment>
//   );
// }

// DrawingDetail.propTypes = {
//   keg: PropTypes.object,

// }

// export default DrawingDetail