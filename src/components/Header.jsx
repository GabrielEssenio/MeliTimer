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
import iconTimer from '../images/Icons/timer.png';
import iconAudience from '../images/Icons/icon-audience.png';
import logoAudiencePrata from '../images/Icons/audiences-prata.jpg';
import logoAudienceDourado from '../images/Icons/audiences-dourado.jpg';
import SideBar from './SideBar';

class Header extends Component {
  render() {
    const { handleChange, temas, backgrounds, handleChangeBackGrounds } = this.props;
    return (
      <header className="header-container">
        <SideBar />

        <img
          className="logo-audience"
          src={ logoAudienceDourado }
          alt="Logo Audience"
        />
        <select value={ temas } onChange={ handleChange } className="custom-select">
          <option value={ JSON.stringify(speakDaily) } selected>Normal Daily</option>
          <option value={ JSON.stringify(speaksShadow) }>App Daily</option>
          <option value={ JSON.stringify(speaksChildren) }>Children Daily</option>
          <option value={ JSON.stringify(speaksBrasil) }>Brazil Daily</option>
        </select>
        <h1 className="title-header">
          <img className="icon-audience" src={ iconAudience } alt="icon-audience" />
          Team
          <span className="title-spotlight"> Audience </span>
          Daily
          <img className="icon-audience" src={ iconAudience } alt="icon-audience" />
          <img className="icon-timer" src={ iconTimer } alt="icon-timer" />
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
        <img className="logo-audience" src={ logoAudiencePrata } alt="Logo Audience" />

      </header>
    );
  }
}

export default Header;
