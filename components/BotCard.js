import React from "react";
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, botFunction, dischargeBot }) {
  return (
    <div className="ui column custom-card">
      <div className="ui card " key={bot.id}>

        {/* Bot image */}
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} onClick={() => botFunction(bot)} />
        </div>

        {/* Bot name and type */}
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>

          {/* Bot catchphrase */}
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>

        {/* Bot stats */}
        <div className="extra content">
          <span>
            <i className="icon heartbeat red large" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning yellow large" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield green large" />
            {bot.armor}
          </span>

          {/* Remove button */}
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() => dischargeBot(bot.id)}
              ><i className="ui trash icon large"></i>
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;