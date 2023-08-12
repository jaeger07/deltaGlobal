import React from 'react';
import Users from './Users';

import card1 from '../../Assets/Images/happy.png';
import card2 from '../../Assets/Images/car1.png';
import card3 from '../../Assets/Images/car2.png';
import card4 from '../../Assets/Images/buyshop.png';

import perfil1 from '../../Assets/Images/perfil/perfil1.png'
import perfil2 from '../../Assets/Images/perfil/perfil2.png'
import perfil3 from '../../Assets/Images/perfil/perfil3.png'

import { Container, Content } from './styles';

export default function Card() {
  return (
    <Container>
      <Content>
        <Users
          img={card1}
          name='Souza costa'
          date='18 de Fevereiro de 2021'
          imgUser={perfil1}
          comment='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        />
        <Users
          img={card2}
          name='Juninho'
          date='18 de Fevereiro de 2021'
          imgUser={perfil2}
          comment='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        />
        <Users
          img={card3}
          name='Nicolas'
          date='18 de Fevereiro de 2021'
          imgUser={perfil3}
          comment='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        />
        <Users
          img={card4}
          name='Jenifer'
          date='18 de Fevereiro de 2021'
          imgUser={perfil1}
          comment='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        />
        <Users
          img={card1}
          name='Austin'
          date='18 de Fevereiro de 2021'
          imgUser={perfil2}
          comment='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        />
        <Users
          img={card2}
          name='Carla'
          date='18 de Fevereiro de 2021'
          imgUser={perfil3}
          comment='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        />
      </Content>
    </Container>
  );
}
