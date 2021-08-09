import React, { Component } from "react";
import "./ProfileStyles.css";

export class Profile extends Component {
  render() {
    return (
      <div>
        <div className="ms-4 cabecera-perfil d-flex align-items-center">
          <a href="/home">
            <i className="fas fa-arrow-left ms-0"></i>
          </a>
          <h3 className="ms-3"></h3>
        </div>
        <div className="img-background-perfil d-flex align-items-center">
          <div className="mb-4">
            <img
              className="img-perfil"
              src="<%= userProfile.profilePicture %>"
              alt="img de perfil"
            />
          </div>
        </div>
        <div className="perfil-info">
          <div className="row g-0">
            <div className="col-md-6">
              <h3 className="mt-2 ms-3"></h3>
              <p className="disabled name-user ms-3"></p>
              <p className="name-user ms-3"></p>
            </div>
            <div className="col-md-6 text-end pt-3 pe-3">
              <button className="btn btn-outline-primary">Editar perfil</button>

              <a
                href="/unfollow/<%= userProfile.id %>"
                className="btn btn-primary rounded-lg"
              >
                unfollow
              </a>

              <a
                href="/follow/<%= userProfile.id %>"
                className="btn btn-primary rounded-lg"
              >
                Follow
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <div className="">
              <a className="btn btn-outline-primary btn-perfil" href="">
                Tweets
              </a>
            </div>
            <div className="">
              <a className="btn btn-outline-primary btn-perfil" href="">
                Tweets y respuestas
              </a>
            </div>
            <div className="">
              <a className="btn btn-outline-primary btn-perfil" href="">
                Fotos y videos
              </a>
            </div>
            <div className="">
              <a className="btn btn-outline-primary btn-perfil" href="">
                Me gusta
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
