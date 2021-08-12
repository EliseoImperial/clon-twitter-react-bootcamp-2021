import { useParams } from "react-router-dom";
import { useState } from "react";
import profileStyles from "./ProfileStyles.module.css";
import axios from "axios";

function Profile() {
  // const { username } = useParams();
  // const [user, setUser] = useState();

  // async function getUser() {
  //   const { user } = await axios({
  //     method: "post",
  //     url: `http://localhost:3100/${username}`,
  //   });

  // history.push("/home");
  // }

  return (
    <div>
      <div
        className={`${profileStyles.cabeceraPerfil} ms-4  d-flex align-items-center`}
      >
        <a href="/home">
          <i className="fas fa-arrow-left ms-0"></i>
        </a>
        <h3 className="ms-3"> algo falta </h3>
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
            <h3 className="mt-2 ms-3"> por aca tambien </h3>
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
    </div>
  );
}

export default Profile;
