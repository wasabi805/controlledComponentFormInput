import React from "react";

const HeroPresenter = () => {
  return (
    <section id={"hero"}>
      <h1 className={"title"}>Contact</h1>

      <div className={"hero-bg"}>
        <img
          src={
            "https://timocampobucketstuff.s3.amazonaws.com/toyota-2000gt.jpeg"
          }
          alt={""}
        />
      </div>

      <div className={"overlay"} />
    </section>
  );
};

export default HeroPresenter;
