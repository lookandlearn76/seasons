import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: 'sun'
  },
  winter: {
    text: "Burr it is cold",
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  //the below code is refactored to use the seasonConfig object plus code above instead of using duplicate terms below
  //const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
  //const icon = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div>
      <i className={`${iconName} icon`}/>
      <h1>{text}</h1>
      <i className={`${iconName} icon`}/>
    </div>
  );
};

export default SeasonDisplay;
