import "./style.css";

function TypeCard() {
    return  (
        <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div id ="chooseCard" className="card">
            <img src="./src/components/WorkoutTypeCard/image/cardio.jpg" className="card-img-top" alt="Cardio"> </img>
            <div className="card-body">
              <h5 className="card-title">Cardio</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div id ="chooseCard" className="card">
            <img src="./src/components/WorkoutTypeCard/image/weights.webp" className="card-img-top" alt="Weights"> </img>
            <h5 className="card-title">Weights</h5>
          </div>
        </div>
      </div>
   
   

    );

    
};

export default TypeCard;