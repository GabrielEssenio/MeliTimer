/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { speaksShadow, speakDaily, speaksChildren, speaksBrasil,
} from '../utils/speaks';
import brasilCopa from '../images/Background/copa2022.png';
import diaDasCriancas from '../images/Background/dia-das-criancas.jpg';
import fotoAudience from '../images/Background/FotoAudience2.jpeg';

class Header extends Component {
  render() {
    const { handleChange, temas, backgrounds, handleChangeBackGrounds } = this.props;
    return (
      <header>
        <select value={ temas } onChange={ handleChange }>
          <option value={ JSON.stringify(speakDaily) }>Daily Normal</option>
          <option value={ JSON.stringify(speaksShadow) } selected>App Shadow</option>
          <option value={ JSON.stringify(speaksChildren) }>Criança</option>
          <option value={ JSON.stringify(speaksBrasil) }>Brasil</option>
        </select>
        <h1>
          Team
          <span className="title-spotlight"> Audience </span>
          Growth Tooling
        </h1>

        <select value={ backgrounds } onChange={ handleChangeBackGrounds }>
          <option value={ fotoAudience }>Team Audience</option>
          <option value={ brasilCopa }>Copa do Brasil</option>
          <option value={ diaDasCriancas } selected>Dia Das Crianças</option>
        </select>
      </header>
    );
  }
}

export default Header;
