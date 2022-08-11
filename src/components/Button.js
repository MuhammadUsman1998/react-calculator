import { useState } from "react";
import "./Button.css";

function Button(props) {
  const [data, setData] = useState("Press Button");
  const [showHide, setShowHide] = useState(false);

  const updateData = () => {
    if (showHide === true) {
      setData("Press Button");
      setShowHide(false);
    } else {
      setData("Muhammad " + props.data);
      setShowHide(true);
    }
  };
  return (
    <>
      <div className="Btn-wrap">
        <table>
          <thead>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>

              <tr>
                <td>
                  <div className="container">{data}</div>
                </td>

                <td>
                  <button className="show-hide" onClick={updateData}>
                    {showHide ? "Hidename" : "ShowName"}
                  </button>
                </td>
              </tr>
            </tbody>
          </thead>
        </table>
      </div>
    </>
  );
}
export default Button;
