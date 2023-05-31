import React from 'react'
import styled from 'styled-components'

const CardItem = styled.section`
  position: relative;
  margin-left: 30px;
  margin-top: 93px;
  width: calc(100% / 3 - 30px);

  .line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: var(--line-clamp, 1);
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
  }
`

const CardPicture = styled.figure`
  img {
    display: block;
    width: 100%;
    height: 400px;
    border-radius: 8px;
    object-fit: cover;
  }
`

const CardInfo = styled.div`
  position: absolute;
  bottom: -64px;
  left: 50%;
  transform: translateX(-50%);
  width: 91%;
  max-width: 100%;
  padding: 20px;
  border-radius: 20px;
  background: #fff;
`

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:first-child) {
    margin-top: 30px;
  }

  .title {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.purple};
  }

  .price {
    margin-left: 5px;
    /* flex-shrink: 0; */
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.5;

    color: transparent;
    background: linear-gradient(86.88deg, #7d6aff 1.38%, #ffb86c 64.35%, #fc2872 119.91%);
    -webkit-background-clip: text;
    background-clip: text;
  }
`

const CardAuthor = styled.figure`
  display: flex;
  align-items: center;
  color: ${(props) => props.secondaryColor || '#333'};

  img {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }

  .author-name {
    margin-left: 12px;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`

const CardReact = styled.div`
  display: flex;
  align-items: center;

  .react-quantity {
    margin-left: 12px;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.5;
    color: #333;
  }
`

const Card = (props) => {
  return (
    <CardItem>
      <CardPicture>
        <img
          src={
            props.productImg ||
            'https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybCUyMGN1dGV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60'
          }
          alt="Cosmic Perspective"
        />
      </CardPicture>

      <CardInfo>
        <CardRow>
          <CardAuthor secondaryColor={props.secondary}>
            <img
              src={
                props.authorAvt ||
                'https://images.unsplash.com/photo-1625492922105-5914617fd869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'
              }
              alt="@zndrson"
            />
            <figcaption className="author-name">@zndrson</figcaption>
          </CardAuthor>
          <CardReact>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.94668e-08 5.40047C-0.000248434 3.95081 0.582385 2.56192 1.61681 1.5463C2.65124 0.530677 4.05058 -0.0263762 5.5 0.000469468C7.21732 -0.00865054 8.85599 0.719644 10 2.00047C11.144 0.719644 12.7827 -0.00865054 14.5 0.000469468C15.9494 -0.0263762 17.3488 0.530677 18.3832 1.5463C19.4176 2.56192 20.0002 3.95081 20 5.40047C20 10.7565 13.621 14.8005 10 18.0005C6.387 14.7735 7.94668e-08 10.7605 7.94668e-08 5.40047Z"
                fill="#FC2872"
              />
            </svg>
            <p className="react-quantity">256</p>
          </CardReact>
        </CardRow>

        <CardRow>
          <h3 className="title line-clamp">Cosmic Perspective</h3>
          <p className="price">12,000 PSL</p>
        </CardRow>
      </CardInfo>
    </CardItem>
  )
}

export default Card
