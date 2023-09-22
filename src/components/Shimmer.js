const Shimmer = () =>{
    return (
      <div className="card-wrapper">
        {
          Array(20).fill("")
          .map((_, index) => (
            <div className="shimmer-card" key={index}></div>

          ))
        }
      </div>
    )
}

export default Shimmer;