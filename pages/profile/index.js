import React, { useEffect } from "react";
import router from "next/router";

function Profile() {
  useEffect(() => {
    if (true) {
      router.push("/profile/login");
    }
  }, []);
  return <div>Perfil</div>;
}

export default Profile;
