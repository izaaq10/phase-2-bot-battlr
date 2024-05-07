
import React, { useState } from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";

function BotCollection({ bots, onEnlist, dischargeBot }) {
  const [selectedBot, setSelectedBot] = useState(null);

  //function to display botspecs when the bot is clicked
  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  if (selectedBot) {
    return (
      <BotSpecs
        bot={selectedBot}
        enlistBot={onEnlist}
        navigateBack={handleGoBack}
      />
    );
  }

  function handleGoBack() {
    setSelectedBot(null);
  }

  const botCards = bots.map((bot) => (
    <BotCard className="bot-card"
      key={bot.id}
      bot={bot}
      botFunction={handleBotClick}
      dischargeBot={dischargeBot}
    />
  ));

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Collection of all bots</h1>
      <div className="ui four column grid">
        <div className="row">{botCards}</div>
      </div>
    </>
  );
}

export default BotCollection;
