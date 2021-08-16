import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import profileStyles from "./ProfileStyles.module.css";
import axios from "axios";
import Sidebar from "../layouts/Sidebar";
import Logout from "../Logout/Logout";
import DiscoverBar from "../layouts/DiscoverBar";
import TwitList from "../TweetList/TweetList";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      const response = await axios({
        method: "get",
        url: `http://localhost:3100/profile/${username}`,
      });
      setUser(response.data);
    }
    getUser();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-xs-2">
          <Sidebar />
        </div>

        <div className="col-md-6 col-xs-2">
          {user && (
            <>
              <div
                className={`${profileStyles.cabeceraPerfil} ms-4  d-flex align-items-center`}
              >
                <a href="/home">
                  <i className="fas fa-arrow-left ms-0"></i>
                </a>
                <h3 className="ms-3">
                  {user.firstname} {user.lastname}
                </h3>
              </div>
              <div
                className={`${profileStyles.imgBackgroundPerfil} d-flex align-items-center`}
              >
                <div className="mb-4">
                  <img
                    className={`${profileStyles.imgPerfil}`}
                    src="<%= userProfile.profilePicture %>"
                    alt="img de perfil"
                  />
                </div>
              </div>
              <div className={profileStyles.perfilInfo}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <h5 className="mt-2 ms-3">
                      {user.firstname} {user.lastname}
                    </h5>
                    <p className="disabled name-user ms-3">@ {user.username}</p>
                    <p className="name-user ms-3"> Se unio el </p>
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
                  <div className="col-md-6 text-end pt-3 pe-3">
                    <button className="btn btn-outline-primary">
                      Editar perfil
                    </button>
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <div className="">
                    <a
                      className={`btn btn-outline-primary ${profileStyles.btnPerfil}`}
                      href="..."
                    >
                      Tweets
                    </a>
                  </div>
                  <div className="">
                    <a
                      className={`btn btn-outline-primary ${profileStyles.btnPerfil}`}
                      href="..."
                    >
                      Tweets y respuestas
                    </a>
                  </div>
                  <div className="">
                    <a
                      className={`btn btn-outline-primary ${profileStyles.btnPerfil}`}
                      href="..."
                    >
                      Fotos y videos
                    </a>
                  </div>
                  <div className="">
                    <a
                      className={`btn btn-outline-primary ${profileStyles.btnPerfil}`}
                      href="..."
                    >
                      Me gusta
                    </a>
                  </div>
                </div>
              </div>
              <TwitList tweets={user.tweets} user={user} />
            </>
          )}
        </div>
        <div class="col-md-3 col-xs-3">
          <DiscoverBar />
        </div>
      </div>
    </div>
  );
}

export default Profile;
