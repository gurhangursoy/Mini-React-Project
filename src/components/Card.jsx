import React from "react";

function Card(props) {
  const { title, text, imgURL } = props.item;
  const ITEM = props.item;

  const [counter, setCounter] = React.useState(
    Number(localStorage.getItem(title) || 0)
  );

  const clickHandler = event => {
    event.target.name == "increase"
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };
  localStorage.setItem(title, counter);

  return (
    <div className="card mt-5">
      {imgURL ? <img src={imgURL} className="card-img-top" alt="..." /> : null}

      <div className="card-body">
        {ITEM.title ? <h2 className="card-title">{ITEM.title}</h2> : null}
        <p className="card-text">{props.item.text}</p>
        <div>
          <div className="d-flex justify-content-between">
            <a
              style={{
                color: "white",
                padding: "10px 19px",
                backgroundColor: "#006400",
                borderRadius: "10px",
                cursor: "pointer"
              }}
              name="increase"
              onClick={clickHandler}
            >
              Like
            </a>

            <p
              style={{
                margin: "auto"
              }}
            >
              {counter}
            </p>

            <a
              style={{
                color: "white",
                padding: "10px",
                backgroundColor: "#8b0000",
                borderRadius: "10px",
                cursor: "pointer"
              }}
              name="decrease"
              onClick={clickHandler}
            >
              Dislike
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
