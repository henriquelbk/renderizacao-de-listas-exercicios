import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
} from "./styled";
import bin from "../../assets/bin.png";
import ListaRemovidos from "../ListaRemovidos/ListaRemovidos";


export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [removidos, setRemovidos] = useState([])

  const addRemovido = (item) => {
    const novaLista = [...removidos, item]
    setRemovidos(novaLista)
  }

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    if (novaTarefa === "") {
      return;
    }

    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((_, index) => index !== tarefa);
    setLista(listaFiltrada);
  };

  const enter = (event) => {
    if (event.key === "Enter") {
      adicionaTarefa();
    }
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={enter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => {
                  removeTarefa(index)
                  addRemovido(tarefa)
                }}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
      <ListaRemovidos lista={removidos}/>
    </ListaTarefasContainer>
  );
}
