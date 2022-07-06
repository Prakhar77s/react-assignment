import "./App.css";
import Records from "./records.json";

function App() {
  return (
    <div className="main">
      {/* heading------------ */}
      {Records.map((record) => {
        return (
          <>
            <div>
              <h1 className="heading">{record.title}</h1>
              <div>
                <span style={{ color: "gray" }}>
                  Multi-Day Course{" "}
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
            </div>
            {/* details-------------- */}
            <div className="details">
              <div>
                <p className="paragraph">{record.content}</p>
                <div className="author">
                  <div className="author-name">
                    <img
                      className="profilepic"
                      src={record.profilepic}
                      alt="alternatetext"
                    />
                    {record.teacher}
                  </div>
                  <div style={{ marginBottom: 7 }}>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span style={{ marginRight: 10 }}>&#11088;</span>
                    {record["teacher-reviews"]}total reviews for this teacher
                  </div>
                  <div>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span style={{ marginRight: 10 }}>&#11088;</span>
                    {record["class-reviews"]} reviews for this class
                  </div>
                  <div style={{ marginTop: "1%", fontWeight: "bold" }}>
                    Completed by {record["completed-by"]} learners
                  </div>
                  <div className="buttons">
                    <button class="schedule">
                      See Class Schedule{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>{" "}
                    </button>
                    <a className="save" href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                        style={{ marginRight: 10 }}
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                      Save
                    </a>
                    <a className="share" href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-share"
                        viewBox="0 0 16 16"
                        style={{ marginRight: 10 }}
                      >
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                      </svg>
                      Share
                    </a>
                  </div>
                </div>
              </div>
              {/* Images */}
              <div className="images">
                <img className="img1" src={record.image} alt="alternatetext" />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
