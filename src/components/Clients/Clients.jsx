import React from "react";
import "./clients.css";
import ArowRightIcon from "../../assets/icons/Clients/arow-right.svg";
import ArowLeftIcon from "../../assets/icons/Clients/arow-left.svg";
import EllipseCenter from "../../assets/icons/Clients/ellipse-center.svg";

export const Clients = ({ clients }) => {
  return (
    <>
      <section className="clients">
        <div className="clients__coments">
          <h2 className="clients__title">What our clients say</h2>
          <p className="clients__text">
            See what our customer say about us. It really matter for us. How
            good or bad we will make ir for evaluation to make EhyalLive better.
          </p>
          <div>
            <img
              className="clients__arow arow__right"
              src={ArowRightIcon}
              alt="arow right"
            />
            <img
              className="clients__arow arow__left"
              src={ArowLeftIcon}
              alt="arow left"
            />
          </div>
          <ul className="clients__item-fb" id="clientsItemFb">
            {clients.map((client) => {
              return (
                <li className="item-fb__card" key={client.id}>
                  <h5 className="card-logo">
                    <span className="card-logo__span">starstar</span>star
                  </h5>
                  <p className="card-text">{client.description}</p>
                  <div className="card-info">
                    <img src={client.img} alt={client.imgAlt} />
                    <div className="card-info__user">
                      <p className="user-name">{client.name}</p>
                      <address className="user-mail">{client.address}</address>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <img
          className="clients__ellipse"
          src={EllipseCenter}
          alt="ellipse-center"
        />
      </section>
    </>
  );
};
