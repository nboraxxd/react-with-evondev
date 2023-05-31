import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardListContainer = styled.section`
  width: 1260px;
  max-width: calc(100% - 40px);
  margin: 10px auto 73px;
`

const CardListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-top: -93px;
`

const CardList = () => {
  return (
    <CardListContainer>
      <CardListContent>
        <Card
          productImg="https://images.unsplash.com/photo-1685280948364-8c188d20f6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          authorAvt="https://images.unsplash.com/photo-1682018667453-b8d127e055b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Card
          productImg="https://images.unsplash.com/photo-1684698937050-ae323feb1fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          authorAvt="https://images.unsplash.com/photo-1681156904917-a2da8014a5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Card />
        <Card
          productImg="https://images.unsplash.com/photo-1588450700303-bc7248e6130c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          authorAvt="https://images.unsplash.com/photo-1578851389322-9bc842c31848?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          secondary="#fc2872"
        />
        <Card
          productImg="https://images.unsplash.com/photo-1682258576679-c6012a5f860e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          authorAvt="https://images.unsplash.com/photo-1675645387065-f66030ecd8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Card
          productImg="https://images.unsplash.com/photo-1677848103503-eaec5f4e6532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          authorAvt="https://images.unsplash.com/photo-1681779279774-79d871470b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </CardListContent>
    </CardListContainer>
  )
}

export default CardList
