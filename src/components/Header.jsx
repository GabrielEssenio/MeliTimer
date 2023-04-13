/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { speaksShadow, speakDaily, speaksChildren, speaksBrasil,
} from '../utils/speaks';
import brasilCopa from '../images/Background/copa2022.png';
import diaDasCriancas from '../images/Background/dia-das-criancas.jpg';
import fotoAudience from '../images/Background/FotoAudience2.jpeg';
import casamentoYan from '../images/Background/CasamentoYan.png';
import fotoGrowth from '../images/Background/fotoGrowth.jpeg';
import aniversarioDaniel from '../images/Background/AniversarioDaniel.png';
import bemVindaAngelica from '../images/Background/bemVindaAngelica.png';

class Header extends Component {
  render() {
    const { handleChange, temas, backgrounds, handleChangeBackGrounds } = this.props;
    return (
      <header>
        <select value={ temas } onChange={ handleChange } className="custom-select">
          <option value={ JSON.stringify(speakDaily) } selected>Daily Normal</option>
          <option value={ JSON.stringify(speaksShadow) }>App Shadow</option>
          <option value={ JSON.stringify(speaksChildren) }>Criança</option>
          <option value={ JSON.stringify(speaksBrasil) }>Brasil</option>
        </select>
        <h1>
          Bem vinda de volta
          <span className="title-spotlight"> Angelica</span>
        </h1>
        <div>

          <select
            value={ backgrounds }
            onChange={ handleChangeBackGrounds }
            className="custom-select"
          >
            <option value={ fotoGrowth } selected>Team Growth</option>
            <option value={ fotoAudience }>Team Audience</option>
            <option value={ brasilCopa }>Copa do Brasil</option>
            <option value={ diaDasCriancas }>Dia Das Crianças</option>
            <option value={ casamentoYan }>Casamento do Yan</option>
            <option value={ aniversarioDaniel }>Aniversário Daniel</option>
            <option value={ bemVindaAngelica }>Bem Vinda Angelica </option>
          </select>
        </div>
      </header>
    );
  }
}

export default Header;
