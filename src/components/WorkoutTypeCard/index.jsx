import "./style.css";

function WorkTypeCard({name}) {
    return  (
          <div id="chooseCard" className="card">
            <img src="./src/components/WorkoutTypeCard/image/cardio.jpg" className="card-img-top" alt="Cardio"/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
          </div>
    );

    
};

export default WorkTypeCard;