import "./App.css";
import Records from "./records.json";
import artimage from "./artimage.jpg";

function App() {
  return (
    <div className="main">
      {Records.map((record) => {
        return (
          <>
            {/* heading section */}
            <div className="heading-section">
              <h1 className="heading">{record.title}</h1>
              <span
                style={{
                  color: "gray",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ paddingRight: 7 }}> Multi-Day Course</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-question-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
              </span>
            </div>

            {/* details section flexbox */}
            <div className="details-container">
              <div classname="child details-text">
                <p className="paragraph">{record.content}</p>
                <div className="author-info">
                  <div className="author-name">
                    <img
                      className="profilepic"
                      src={record.profilepic}
                      alt="content"
                    />
                    <span>{record.teacher}</span>
                  </div>
                  <div
                    style={{ marginBottom: 7, marginTop: 10, color: "grey" }}
                  >
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span style={{ marginRight: 10 }}>&#11088;</span>
                    {record["teacher-reviews"]}total reviews for this teacher
                  </div>
                  <div style={{ color: "gray" }}>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span style={{ marginRight: 10 }}>&#11088;</span>
                    {record["class-reviews"]} reviews for this class
                  </div>
                  <div
                    style={{
                      marginTop: "1rem",
                      fontSize: "large",
                      fontWeight: 500,
                    }}
                  >
                    Completed by {record["completed-by"]} learners
                  </div>
                  {/* buttons */}
                  <div className="buttons">
                    <a className="schedule" href="">
                      See Class Schedule <i class="fas fa-chevron-right"></i>
                    </a>
                    <a className="save" href="">
                      <i class="fa-regular fa-heart"></i> Save
                    </a>
                    <a className="share" href="">
                      <i class="fa-solid fa-share"></i> Share
                    </a>
                  </div>
                </div>
              </div>
              <div className="child details-image">
                <img className="img1" src={artimage} alt="content" />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
