import "./BiodataDiri.css";

import Nama from "./Nama";
import NIM from "./NIM";
import Jurusan from "./Jurusan";
import Email from "./Email";
import Alamat from "./Alamat";
import Hobi from "./Hobi";

function BiodataDiri() {
  return (
    <div className="cv-container">

      {/* HEADER */}
      <div className="header">
        <h1><Nama /></h1>
        <p><Jurusan /></p>

        <div className="profile">
          <img src="img\fotoputri.jpeg" alt="profile" />
        </div>
      </div>
      {/* CONTENT */}
      <div className="content">

        {/* LEFT */}
        <div className="left">
          <h3>INFORMASI</h3>
          <div className="box"><NIM /></div>
          <div className="box"><Email /></div>
          <div className="box"><Alamat /></div>

          <h3>HOBI</h3>
          <div className="box"><Hobi /></div>
        </div>

      </div>
    </div>
  );
}

export default BiodataDiri;