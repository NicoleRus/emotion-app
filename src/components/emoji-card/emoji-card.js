import React from 'react';
import { oneOf } from 'prop-types';
import './emoji-card.scss';
import happyImage from '../../assets/emojis/happy.svg';
import sadImage from '../../assets/emojis/sad.svg';
import angryImage from '../../assets/emojis/angry.svg';
import scaredImage from '../../assets/emojis/scared.svg';
import tiredImage from '../../assets/emojis/tired.svg';
import surprisedImage from '../../assets/emojis/surprised.svg';

const EmojiCard = ({emotion}) => {
  let emotionImg;
  switch(emotion) {
    case 'happy': 
      emotionImg = happyImage;
      break;
    case 'sad':
      emotionImg = sadImage;
      break;
    case 'angry':
      emotionImg = angryImage;
      break;
    case 'scared':
      emotionImg = scaredImage;
      break;
    case 'tired':
      emotionImg = tiredImage;
      break;
    case 'surprised':
      emotionImg = surprisedImage;
      break;
    default: break;
  }

  return (
    <div className="emoji-container">
      <img src={emotionImg} alt={emotion} className="emoji-img"></img>
      <span className="emoji-emotion">
        {emotion}
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