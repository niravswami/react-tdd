import React from "react";

export default function Application() {
  return (
    <>
      <h1>job Apllication Form</h1>
      <h2>section 1</h2>
      <p>All fields are madatory</p>
      <span title="closeIcon">x</span>
      <img
        src="	https://d1etqblq65l80m.cloudfront.net/y4yv79sjnud245gav5kfqtpd1wo2"
        alt="img"
      />
      <div data-testid="customEle">Custom</div>
      <form>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="your name"
              value={"nirav"}
              onChange={() => {}}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="email addr"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
          ></textarea>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            Email
          </label>
          <select id="inputState" className="form-select">
            <option defaultValue={""}>Choose...</option>
            <option>opt 1</option>
            <option>opt 2</option>
            <option>opt 3</option>
          </select>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
                onChange={() => {}}
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </>
  );
}
