import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import profileStyles from "./ProfileStyles.module.css";
import axios from "axios";
import Sidebar from "../layouts/Sidebar";

import DiscoverBar from "../layouts/DiscoverBar";
import TwitList from "../TweetList/TweetList";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("im here");
    async function getUser() {
      const response = await axios({
        method: "get",
        url: `http://localhost:3100/profile/${username}`,
      });

      setUser(response.data);
      console.log(response.data);
    }
    getUser();
    // eslint-disable-next-line
  }, [username]);

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
                    src="../img/profile-2.png"
                    alt="img de perfil"
                  />
                </div>
              </div>
              <div className={profileStyles.perfilInfo}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <h3 className="mt-2 ms-3 my-0">
                      {user.firstname} {user.lastname}
                    </h3>
                    <p className={`${profileStyles.nameUser} ms-3 disabled `}>
                      @ {user.username}
                    </p>
                    <p className={`${profileStyles.nameUser} ms-3 my-0`}>
                      <i class="far fa-calendar-alt"></i> Se unió en mayo de
                      2021{" "}
                    </p>
                    <div className="d-flex ">
                      <a
                        href="..."
                        className={`${profileStyles.seguidosSeguidosres} ms-3 mb-3`}
                      >
                        23 Siguiendo
                      </a>
                      <a
                        href="..."
                        className={`${profileStyles.seguidosSeguidosres} ms-3 `}
                      >
                        23 Siguiendo
                      </a>
                    </div>

                    <a href="..." className="btn btn-primary rounded-lg">
                      unfollow
                    </a>

                    <a href="..." className="btn btn-primary rounded-lg">
                      Follow
                    </a>
                  </div>
                  <div className="col-md-6 text-end pt-3 pe-3">
                    <button className="btn btn-outline-secondary rounded-pill">
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
              <TwitList user={user} />
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
