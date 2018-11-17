import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import ScoreDots from './ScoreDots';

const rushingGameBoard = keyframes`
  0% {
    background-color: ${props => props.theme.primary};
  }
  50% {
    background-color: ${props => props.theme.highlight};
  }
  100% {
    background-color: ${props => props.theme.primary};
  }
`;

export const GameBoard = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  font-family: 'Boogaloo', 'Helvetica', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2.6rem;
  transition: all 0.5s ease-in-out;
  transition-property: padding, transform;

  ${props =>
    props.isRotated === true
      ? `
      padding-top: 0;
      padding-bottom: constant(safe-area-inset-top);
      padding-bottom: env(safe-area-inset-top);
      transform: rotate(180deg);
    `
      : ``};

  ${props =>
    props.isRushing === true
      ? `
      animation: ${rushingGameBoard} 0.5s ease-in-out infinite;
    `
      : ``};
`;

const fadeOut = keyframes`
  0% {
    background-color: ${props => props.theme.highlight};
  }
  100% {
    background-color: ${props => props.theme.primary};
  }
`;

export const GameButton = styled.button`
  padding: 0 20px;
  cursor: pointer;
  background: inherit;
  border: ${props => props.borderless
    ? 'none'
    : props.theme.borderWidth + ' solid ' + props.theme.secondary
  };
  text-transform: inherit;
  color: inherit;
  font: inherit;
  ${props => props.icon
    ? 'font-family: FontAwesome;'
    : ''
  }

  &:active {
    background-color: ${props => props.theme.highlight};
  }
  &:focus {
    outline: none;
    -webkit-appearance: none;
  }
`;

const GameHeaderWrapper = styled.div`
  position: relative;
  z-index: 1000;
  height: 10%;
  line-height: 100%;
  white-space: nowrap;
  width: 100%;
  border-width: ${props => props.theme.borderWidth};
  border-style: solid;
  border-color: ${props => props.theme.secondary};
  border-bottom: none;
  ${props => props.isFrozen
    ? `z-index: 1; opacity: ${props.theme.frozenOpacity};`
    : ''
  }
`;

const GameHeaderButton = styled(GameButton)`
  position: absolute;
  width: 50px;
  height: 100%;
  padding: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.5em;
  ${props => props.isFrozen
    ? `
      opacity: 0.25;
      pointer-events: none;
    `
    : ''
  }
`;

const GameHeaderScore = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  line-height: 0;
  ${props => (props.align === 'left' ? 'left: 20px;' : 'right: 20px;')};
`;
GameHeaderScore.propTypes = {
  align: PropTypes.oneOf(['left', 'right']).isRequired
};

const ICONS = {
  cog: '\uf013',
  checkmark: '\uf00c',
  pause: '\uf04c'
};

class GameHeader extends Component {
  render() {
    const {
      pointsForTeamA,
      pointsForTeamB,
      onTouchButton,
      buttonIcon,
      isFrozen
    } = this.props;

    return (
      <GameHeaderWrapper isFrozen={isFrozen}>
        {typeof pointsForTeamA !== 'undefined' ? (
          <GameHeaderScore align="left">
            <ScoreDots score={pointsForTeamA} />
          </GameHeaderScore>
        ) : (
          ''
        )}
        <GameHeaderButton
          onTouchEnd={() => isFrozen ? false : onTouchButton() }
          borderless
          icon
          isDisabled={isFrozen}
        >
          {ICONS[buttonIcon]}
        </GameHeaderButton>
        {typeof pointsForTeamB !== 'undefined' ? (
          <GameHeaderScore align="right">
            <ScoreDots score={pointsForTeamB} reverse />
          </GameHeaderScore>
        ) : (
          ''
        )}
      </GameHeaderWrapper>
    );
  }
}

GameHeader.propTypes = {
  pointsForTeamA: PropTypes.number,
  pointsForTeamB: PropTypes.number,
  onTouchButton: PropTypes.func.isRequired,
  buttonIcon: PropTypes.string.isRequired,
  isFrozen: PropTypes.bool
};

export { GameHeader };

export const GameContent = styled.div`
  position: relative;
  height: 90%;
  width: 100%;
`;
