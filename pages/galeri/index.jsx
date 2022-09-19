import React from "react";
import Layout from "../../components/layout";

function Galeri() {
  return (
    <>
      <div style={{ backgroundColor: "#e9dffa" }}>
        <h3 className="text-center py-5">Galeri Kami</h3>
      </div>
      <div className="container my-3">
        <div className="row d-flex galeri-row">
          <div className="col galeri-col px-1">
            <img
              src="https://images.pexels.com/photos/13623557/pexels-photo-13623557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="galeri-img"
            />
            <img
              src="https://images.pexels.com/photos/5969628/pexels-photo-5969628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="galeri-img"
            />
            <img
              src="https://images.pexels.com/photos/13681489/pexels-photo-13681489.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="galeri-img"
            />
            <img
              src="https://images.pexels.com/photos/12800709/pexels-photo-12800709.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="galeri-img"
            />
            <img
              src="https://images.pexels.com/photos/13461809/pexels-photo-13461809.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="galeri-img"
            />
            <img
              src="https://images.pexels.com/photos/13547192/pexels-photo-13547192.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="galeri-img"
            />
          </div>
          {/* <div className="col galeri-col px-1">
           
          </div> */}
        </div>
        {/* <div className="row d-flex galeri-row">
          <div className="col galeri-col px-1">
            <img
              src="https://images.pexels.com/photos/12800709/pexels-photo-12800709.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="galeri-img"
            />
            <img
              src="https://images.pexels.com/photos/13461809/pexels-photo-13461809.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="galeri-img"
            />
            <img
              src="https://images.pexels.com/photos/13547192/pexels-photo-13547192.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="galeri-img"
            />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Galeri;

Galeri.getLayout = function getLayout(page) {
  return <Layout title={"Galeri | Janggala Studio"}>{page}</Layout>;
};
