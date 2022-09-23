import React from "react";
import Link from "next/link";

function Services() {
  return (
    <div className="home-services my-5 container">
      <h3 className="text-center title-text">Janggala Studio</h3>
      <div className="row row-cols-4 g-3 mt-5 p-0 justify-content-center">
        <div className="col home-service-col">
          <Link
            href="/galeri/family"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="https://images.pexels.com/photos/4205505/pexels-photo-4205505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img rounded-0 home-service-img"
                alt="family-img "
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Family
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link
            href="/galeri/wedding"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img rounded-0 home-service-img"
                alt="wedding-img "
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Wedding
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link
            href="/galeri/personal"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img rounded-0 home-service-img"
                alt="personal-img "
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Personal
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link href="/galeri/group" className="stretched-link home-card-title">
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="https://images.pexels.com/photos/1963622/pexels-photo-1963622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="group-img"
                className="card-img rounded-0 home-service-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Group
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link
            href="/galeri/graduation"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="https://images.pexels.com/photos/901964/pexels-photo-901964.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img rounded-0 home-service-img"
                alt="graduation-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Graduation
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link
            href="/galeri/new-born"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="/assets/logo.jpg"
                className="card-img rounded-0 home-service-img"
                alt="new-born-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  New Born
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link
            href="/galeri/home-service"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="/assets/logo.jpg"
                className="card-img rounded-0 home-service-img"
                alt="home-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Home Service
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link
            href="/galeri/maternity"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="/assets/logo.jpg"
                className="card-img rounded-0 home-service-img"
                alt="maternity-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Maternity
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
