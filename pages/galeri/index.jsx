import Layout from "../../components/layout";
import axios from "../../utils/axios";
import React, { useState, useEffect } from "react";

function Galeri() {
  const [data, setData] = useState([]);
  const instagram = async () => {
    try {
      const result = await axios.get();
      setData(result.data.data);
      //   console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);
  useEffect(() => {
    instagram();
  }, []);

  return (
    <>
      <div className="" style={{ backgroundColor: "#e9dffa" }}>
        <h3 className="text-center py-5 mb-0">Galeri Kami</h3>
      </div>
      <div className="container py-3" style={{ backgroundColor: "white" }}>
        {/* <div className="row text-center">
          <div className="col-1 border rounded-pill">
            <h6>Terbaru</h6>
          </div>
          <div className="col-1 border rounded-pill">
            <h6>Wedding</h6>
          </div>
          <div className="col-1 border rounded-pill">
            <h6>Personal</h6>
          </div>
          <div className="col-1 border rounded-pill">
            <h6>Family</h6>
          </div>
          <div className="col-1 border rounded-pill">
            <h6>Group</h6>
          </div>
          <div className="col-1 border rounded-pill">
            <h6>Graduation</h6>
          </div>
        </div> */}
        <div className="row row-cols-4 galeri-row">
          {data.map((item) => (
            <div
              className="col galeri-col px-1 align-self-center"
              key={item.id}
            >
              <img
                src={item.media_url}
                alt="galeri-terbaru"
                className="galeri-img"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Galeri;

Galeri.getLayout = function getLayout(page) {
  return <Layout title={"Galeri | Janggala Studio"}>{page}</Layout>;
};
