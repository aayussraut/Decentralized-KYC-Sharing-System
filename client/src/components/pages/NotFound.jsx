import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function NotFound() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div
            class="error-template"
            style={{
              padding: "40px 15px",
              textAlign: "center",
              marginTop: "120px",
            }}
          >
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div class="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <Link to="/">
              <div
                class="error-actions"
                style={{ marginTop: "15px", marginBottom: "15px" }}
              >
                <button
                  class="btn btn-primary btn-lg"
                  style={{ marginRight: "10px" }}
                >
                  <span class="glyphicon glyphicon-home"></span>
                  Take Me Home{" "}
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
