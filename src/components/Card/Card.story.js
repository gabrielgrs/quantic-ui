import React from 'react'
import { Card, Column, Row } from '..'

export default {
  title: 'Components/Card'
}

export const Base = () => {
  const cardInfo = {
    author: 'Vania Martins dos Santos',
    category: 'Gestão e Estratégia',
    title: 'Sociologia da Administração, 2ª edição',
    url: 'https://app.lit.com.br/api/images/courses/1$_$660.jpg'
  }

  return (
    <Row>
      <Column size={3}>
        <Card
          title={cardInfo.title + cardInfo.title}
          banner={cardInfo.url}
          category={cardInfo.category}
          author={cardInfo.author}
        />
      </Column>
      <Column size={3}>
        <Card
          title={cardInfo.title}
          banner={cardInfo.url}
          category={cardInfo.category}
          author={cardInfo.author}
        />
      </Column>
    </Row>
  )
}
