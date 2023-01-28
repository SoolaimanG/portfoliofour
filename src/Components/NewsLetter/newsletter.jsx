import "./newsletter.css";

function Newsletter() {
  return (
    <div className="container">
      <div className="news__zero">
        <div className="news__one">
          <div className="new__three">
            <h2>Subscribe to our Newsletter & Never miss latest updates</h2>
            <div className="zero__form">
              <form className="news__two" action="">
                <input placeholder="Email Address" type="text" />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
