import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  margin: 0 auto;
  max-width:1450px;
  margin-top: 20px;

  @media (max-width: 1070px) {
    margin-top: 10px;
}
  
  .swiper {
    height: 100%;
    width: 100%;
    border-radius: 0.62rem;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    width: 100%;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide .slider1 img,
  .swiper-slide .slider2 img,
  .swiper-slide .slider3 img {
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }

  .swiper-slide .slider1 {
    background-color: #10264E;
  }

  .swiper-slide .textSlider2 {
    background-color: #4E4C10;
  }

  .swiper-slide .slider3 {
    background-color: #AA0202C2;
  }

  .slider1TextLeft {
    position: absolute;
    top: 25%;
    left: 7%;


    p {
      font-size: 44px;
      font-weight: 300;
      letter-spacing: 0.88px;
      color: rgba(255,255,255,0.7);
      text-align: start;
      line-height: 5rem;

      @media (max-width: 1070px) {
        font-size: 32px;
        line-height: 3rem;

      }
      @media (max-width: 555px) {
          font-size: 22px;
          line-height: 2rem;
        }
      @media (max-width: 420px) {
          font-size: 14px;
          line-height: 1.5rem;
        }

      span {
        font-size: 101px;
        font-weight: 800;
        letter-spacing: 2.02px;
        color: #FFF;

        @media (max-width: 1070px) {
          font-size: 66px;
        }
        @media (max-width: 555px) {
          font-size: 32px;
        }
        @media (max-width: 420px) {
          font-size: 24px;
        }
      }
    }
  }

  .slider1TextRight {
    position: absolute;
    top: 25%;
    right: 8%;

    @media (max-width: 770px) {
      top: 15%;
}

    p {
      font-size: 35px;
      font-weight: 400;
      line-height: 3rem;
      color: rgba(255,255,255,0.7);
      text-align: start;

      @media (max-width: 1070px) {
        font-size: 22px;
        line-height: 2.2rem;
      }
      @media (max-width: 699px) {
        font-size: 18px;
        line-height: 2rem;
      }
      @media (max-width: 555px) {
        font-size: 14px;
        line-height: 1.5rem;
      }
      @media (max-width: 420px) {
          font-size: 12px;
          line-height: 1rem;
        }
      
    }
  }

  .slider1RightSpan1 {
    font-size: 66px;
    font-weight: 800;
    letter-spacing: 0.88px;
    opacity: 1;
    color: #FFF;
    margin-left: 20px;

    @media (max-width: 1070px) {
      font-size: 44px;

    }
    @media (max-width: 699px) {
      font-size: 32px;
    }
    @media (max-width: 555px) {
      font-size: 22px;
      margin-left: 10px;
    }
    @media (max-width: 420px) {
      font-size: 16px;
    }
  }

  .slider1RightSpan2 {
    font-size: 66px;
    font-weight: 800;
    letter-spacing: 0.88px;
    color: #FFF;
    margin-left: 70px;

    @media (max-width: 1070px) {
      font-size: 44px;
    }   
    @media (max-width: 699px) {
      font-size: 32px;
    }
    @media (max-width: 555px) {
      font-size: 22px;
      margin-left: 30px;
    }
    @media (max-width: 420px) {
      font-size: 16px;
    }
  }

  .slider2Text {
    position: absolute;
    top: 25%;
    left: 7%;

    p {
      font-size: 32px;
      color: #ffffff;
      text-align: start;

      @media (max-width: 1070px) {
      font-size: 18px;
    }
      @media (max-width: 1070px) {
      font-size: 12px;
    }

      span {
        font-size: 66px;
        font-weight: bold;

        @media (max-width: 1070px) {
      font-size: 32px;
    }
        @media (max-width: 399px) {
      font-size: 22px;
    }
      }
    }
  }

  .slider3Text {
    position: absolute;
    top: 25%;
    left: 7%;

    @media (max-width: 1255px) {
      
    }

    p {
      font-size: 32px;
      color: #ffffff;
      text-align: start;

      @media (max-width: 1070px) {
      font-size: 18px;
    }
      @media (max-width: 1070px) {
      font-size: 12px;
    }

      span {
        font-size: 66px;
        font-weight: bold;

        @media (max-width: 1070px) {
      font-size: 32px;
    }
        @media (max-width: 399px) {
      font-size: 22px;
    }
      }
    }
  }
  `