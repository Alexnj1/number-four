import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { QUERY_ME } from "../../utils/graphQL/queries";

function ProfilePage({ setCurrentPage }) {
  setCurrentPage("Profile");

  const data = useQuery(QUERY_ME)
  console.log(data)

  return (
    <div>
      <div className="">
        <div className="container-fluid">
          <div className="page-titles">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link to="/profile">Profile</Link>
              </li>
            </ol>
          </div>
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="profile card card-body px-3 pt-3 pb-0">
                <div className="profile-head">
                  <div className="photo-content">
                    <div className="cover-photo"></div>
                  </div>
                  <div className="profile-info">
                    <div className="profile-photo">
                      <img
                        src="images/profile/profile.png"
                        className="img-fluid rounded-circle"
                        alt=""
                      ></img>
                    </div>
                    <div className="profile-details">
                      <div className="profile-name px-3 pt-2">
                        <h4 className="text-primary mb-0">DATA.NAME</h4>
                        <p>DATA.WORKOUT-PERSONA</p>
                      </div>
                      <div className="profile-email px-2 pt-2">
                        <h4 className="text-muted mb-0">DATA.EMAIL</h4>
                        <p>Email</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                {/* start card body */}
                <div className="card-body">
                  <div className="profile-statistics mb-5">
                    <div className="text-center">
                      <div className="row justify-content-center">
                        <h4 className="text-center">DATA.NAME'S Workouts</h4>
                      </div>
                      {/* user workout data goes here */}
                    </div>
                  </div>
                  <div className="profile-statistics mb-5">
                    <div className="text-center">
                      <div className="row justify-content-center">
                        <h4 className="text-center">DATA.NAME'S Meal Plan</h4>
                      </div>
                    </div>
                  </div>
                  {/* user meal plan data goes here */}
                </div>
                {/* end card body */}
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="profile-tab">
                    <div className="custom-tab-1">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            href="#about-me"
                            data-toggle="tab"
                            className="nav-link"
                          >
                            About Me
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#profile-settings"
                            data-toggle="tab"
                            className="nav-link"
                          >
                            Settings
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div id="about-me" className="tab-pane active">
                          <div className="profile-about-me">
                            <div className="pt-4 border-bottom-1 pb-3">
                              <h4 className="text-primary">About Me</h4>
                              <p className="mb-2">
                                DATA.ABOUT-ME <br></br>A wonderful serenity has
                                taken possession of my entire soul, like these
                                sweet mornings of spring which I enjoy with my
                                whole heart. I am alone, and feel the charm of
                                existence was created for the bliss of souls
                                like mine.I am so happy, my dear friend, so
                                absorbed in the exquisite sense of mere tranquil
                                existence, that I neglect my talents.
                              </p>
                              <p>
                                A collection of textile samples lay spread out
                                on the table - Samsa was a travelling salesman -
                                and above it there hung a picture that he had
                                recently cut out of an illustrated magazine and
                                housed in a nice, gilded frame.
                              </p>
                            </div>
                          </div>

                          <div className="profile-personal-info">
                            <h4 className="text-primary mb-4">
                              Personal Information
                            </h4>
                            <div className="row mb-2">
                              <div className="col-sm-3 col-5">
                                <h5 className="f-w-500">
                                  Name <span className="pull-right">:</span>
                                </h5>
                              </div>
                              <div className="col-sm-9 col-7">
                                <span>DATA.NAME</span>
                              </div>
                            </div>
                            <div className="row mb-2">
                              <div className="col-sm-3 col-5">
                                <h5 className="f-w-500">
                                  Email <span className="pull-right">:</span>
                                </h5>
                              </div>
                              <div className="col-sm-9 col-7">
                                <span>DATA.EMAIL</span>
                              </div>
                            </div>

                            <div className="row mb-2">
                              <div className="col-sm-3 col-5">
                                <h5 className="f-w-500">
                                  Age <span className="pull-right">:</span>
                                </h5>
                              </div>
                              <div className="col-sm-9 col-7">
                                <span>DATA.AGE</span>
                              </div>
                            </div>
                            <div className="row mb-2">
                              <div className="col-sm-3 col-5">
                                <h5 className="f-w-500">
                                  Workout Persona
                                  <span className="pull-right">:</span>
                                </h5>
                              </div>
                              <div className="col-sm-9 col-7">
                                <span>DATA.WORKOUT-PERSONA</span>
                              </div>
                            </div>
                            <div className="row mb-2">
                              <div className="col-sm-3 col-5">
                                <h5 className="f-w-500">
                                  Eagle Fitness Member Since
                                  <span className="pull-right">:</span>
                                </h5>
                              </div>
                              <div className="col-sm-9 col-7">
                                <span>DATE JOINED(CREATED-AT)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="profile-settings" className="tab-pane fade">
                          <div className="pt-3">
                            <div className="settings-form">
                              <h4 className="text-primary">Account Settings</h4>
                              <p className="font-weight-bold">
                                Modify your personal information here
                              </p>
                              <form>
                                <div className="form-row">
                                  <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input
                                      type="email"
                                      placeholder="Email"
                                      className="form-control"
                                    ></input>
                                  </div>
                                  <div className="form-group col-md-6">
                                    <label>Password</label>
                                    <input
                                      type="password"
                                      placeholder="Password"
                                      className="form-control"
                                    ></input>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label>First Name</label>
                                  <input
                                    type="name"
                                    className="form-control"
                                  ></input>
                                </div>
                                <div className="form-group">
                                  <label>Last Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                  ></input>
                                </div>
                                <div className="form-group">
                                  <label>Workout Persona</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                  ></input>
                                </div>
                                <div className="form-group">
                                  <label>About Me</label>
                                  <textarea
                                    type="text"
                                    className="form-control"
                                  ></textarea>
                                </div>

                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Submit !
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="replyModal">
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Post Reply</h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                            >
                              <span>&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <textarea className="form-control" rows="4">
                                Message
                              </textarea>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger light"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
