export interface Evento {

  idEvento: number;
  nome: string;
  dataHoraInicio: Date;
  dataHoraFim: Date;
  local: string;
  descricao: string;
  limiteVagas: number;

  idEventoStatus: number;
  idCategoriaEvento: number;
}
