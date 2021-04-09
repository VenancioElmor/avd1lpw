import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Div } from './styles';

interface ParametrosDaRota {
  id: string;
}

/* tipo disciplina */
interface IDisciplina {
  disciplina: string;
  professor: string;
  dia: string;
  periodo: string;
  horario: string;
}

const Profile: React.FC = () => {
  /* pega os parametros da rota */
  const { params } = useRouteMatch<ParametrosDaRota>();

  /* pega as disciplinas do localstorage */
  const [disciplinas, setDisciplinas] = useState<IDisciplina[]>(() => {
    /* essa função é chamada quando quiser ver a variavel disciplnas */
    const repoLC = localStorage.getItem('ProvaAvdDisciplinas');
    /* se não existir no localstorage ele retorna array vazio */
    if (repoLC) {
      return JSON.parse(repoLC);
    }
    return [];
  });

  /* cria o objeto disciplina referente a posição ao parametro da rota */
  const disciplina: IDisciplina = disciplinas[Number(params.id)];

  return (
    <Div>
      <h1> Detalhes da disciplina</h1>
      {/* mostra os objetos */}
      <p>nome da disciplina: {disciplina.disciplina}</p>
      <p>professor: {disciplina.professor}</p>
      <p>dia: {disciplina.dia}</p>
      <p>periodo: {disciplina.periodo}</p>
      <p>horario: {disciplina.horario}</p>
      {/* botão de voltar */}
      <Link to="/">Voltar para a home</Link>
    </Div>
  );
};

export default Profile;
