import React from "react";
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotSpecs({ bot, navigateBack, enlistBot }) {
  //your bot code here
  const { name, catchphrase, bot_class, health, damage, armor, avatar_url } = bot;

  const handleNavigation = () => {
    navigateBack();
  };

  const handleClickEnlist = () => {
    enlistBot(bot);
  };

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="five wide column">
            <img alt="This bot is offline!" className="ui medium circular image bordered" src={avatar_url} />
          </div>
          <div className="five wide column">
            <h2>Name: {name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {catchphrase}
            </p>
            <strong>
              Class: {bot_class}
              <i className={botTypeClasses[bot_class]} />
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button className="ui button fluid" onClick={handleNavigation}>
              Go Back
            </button>
            <br></br>
            <button className="ui button positive fluid" onClick={handleClickEnlist}>
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;