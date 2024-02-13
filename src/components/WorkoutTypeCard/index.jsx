import "./style.css";

function WorkTypeCard({name,image}) {
    return  (
          <div id="chooseCard" className="card h-100 d-inline-block ">
            <img src={"./src/components/WorkoutTypeCard/image/" + image } className="card-img-top h-100 d-inline-block  " alt="Cardio"/>
            <div className="card-img-overlay  d-flex align-items-center justify-content-center">
              <h5 className="card-title text-light  fs-1 fw-bold">{name}</h5>
            </div>
          </div>
          
          
    );

    
};

export default WorkTypeCard;