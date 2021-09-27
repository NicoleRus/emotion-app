import React from 'react';
import { oneOf } from 'prop-types';

import './emoji-card.css';
import happy from '../../assets/emojis/happy.svg';
import sad from '../../assets/emojis/sad.svg';
import angry from '../../assets/emojis/angry.svg';
import scared from '../../assets/emojis/scared.svg';
import tired from '../../assets/emojis/tired.svg';
import surprised from '../../assets/emojis/surprised.svg';

function EmojiCard(emotion) {
  return (
    <div>
      <img src={emotion} alt={emotion} className="emoji"></img>
      <span className="emotion">
        {/* {emotion} */}
      </span>
    </div>
  );
}


EmojiCard.propTypes = {
  emotion: oneOf([
    'happy',
    'sad',
    'angry',
    'tired',
    'scared',
    'surprised'
  ])
}

EmojiCard.displayName = 'EmojiCard';

export default EmojiCard;