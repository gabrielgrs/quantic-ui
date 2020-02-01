import React from 'react';
import { Card, Column, Row } from '..';
export default {
  title: 'Components/Card'
};
export var Base = function Base() {
  var cardInfo = {
    author: 'Vania Martins dos Santos',
    category: 'Gestão e Estratégia',
    title: 'Sociologia da Administração, 2ª edição',
    url: 'https://app.lit.com.br/api/images/courses/1$_$660.jpg'
  };
  return React.createElement(Row, null, React.createElement(Column, {
    size: 3
  }, React.createElement(Card, {
    title: cardInfo.title + cardInfo.title,
    banner: cardInfo.url,
    category: cardInfo.category,
    author: cardInfo.author
  })), React.createElement(Column, {
    size: 3
  }, React.createElement(Card, {
    title: cardInfo.title,
    banner: cardInfo.url,
    category: cardInfo.category,
    author: cardInfo.author
  })));
};