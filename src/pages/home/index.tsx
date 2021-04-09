/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Title, Form } from './styles';

interface IDisciplina {
  disciplina: string;
  professor: string;
  dia: string;
  periodo: string;
  horario: string;
}

const Home: React.FC = () => {
  const [disciplina, setDisciplina] = useState('');
  const [professor, setProfessor] = useState('');
  const [dia, setDia] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [horario, setHorário] = useState('');

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

  /* Toda vez que setDisciplinas for chamado essa função é executada e e grava no localstorage */
  useEffect(() => {
    localStorage.setItem('ProvaAvdDisciplinas', JSON.stringify(disciplinas));
  }, [disciplinas]);

  function submitForm(evento: FormEvent<HTMLFormElement>): void {
    evento.preventDefault();
    /* criando o objeto disciplina para poder adicionar no array e tipando com Idisciplina */
    const disciplinaObj: IDisciplina = {
      disciplina,
      professor,
      dia,
      periodo,
      horario,
    };
    /* chamando uma funcao oara adicionar o novo objeto */
    setDisciplinas([...disciplinas, disciplinaObj]);
  }

  return (
    <>
      <Title>Aplicação AVD</Title>

      {/* formulario pra poder cadastrar a disciplina e no evento de submit do form ele chama uma função */}
      <Form onSubmit={submitForm}>
        <label>disciplinas:</label>
        <input
          placeholder="Digite sua disciplina"
          value={disciplina}
          onChange={(e: any) => {
            setDisciplina(e.target.value);
          }}
        />

        {/* value representa o valor do input quando e iniciado  */}
        {/* onchange vai refletir o valor do input na variavel  */}
        <label>perofessor:</label>
        <input
          placeholder="Digite seu professor"
          value={professor}
          onChange={(e: any) => {
            setProfessor(e.target.value);
          }}
        />

        <label>dia da semana:</label>
        <input
          placeholder="Digite seu dia da semana"
          value={dia}
          onChange={(e: any) => {
            setDia(e.target.value);
          }}
        />

        <label>periodo:</label>
        <input
          placeholder="Digite seu periodo"
          value={periodo}
          onChange={(e: any) => {
            setPeriodo(e.target.value);
          }}
        />

        <label>horario:</label>
        <input
          placeholder="Digite seu horario"
          value={horario}
          onChange={(e: any) => {
            setHorário(e.target.value);
          }}
        />

        <button type="submit">Cadastrar disciplina</button>
      </Form>

      {/* aqui ele lista os professores */}
      <ul>
        {/* aqi ele percorre o array com map e e exibe no <li> */}
        {disciplinas.map((disc: IDisciplina, index: number) => (
          <li key={disc.professor}>
            <Link to={`/disciplina/${index}`}>{disc.professor}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
