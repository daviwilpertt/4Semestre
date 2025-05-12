class AgendamentoConsulta {
  constructor() {
    this.consultas = [];
  }

  agendarConsulta(crm, paciente, data) {
    if (!crm || !this.validaMedico(crm)){
      throw new Error("Médico inválido");
    }

    if (!paciente || !data) {
      throw new Error("Paciente e data são obrigatórios.");
    }

    if (!this.dataValida(data)) {
      throw new Error("Data inválida.");
    }

    if (!this.dataFutura(data)) {
      throw new Error("A data deve ser futura.");
    }

    this.consultas.push({ paciente, data });
  }

  cancelarConsulta(paciente) {
    this.consultas = this.consultas.filter(c => c.paciente !== paciente);
  }

  listarConsultas() {
    return this.consultas;
  }

  dataValida(data) {
    const dataObj = new Date(data);
    return !isNaN(dataObj.getTime());
  }

  dataFutura(data) {
    const agora = new Date();
    const dataObj = new Date(data);
    return dataObj.getTime() > agora.getTime();
  }
  
  validaMedico(crm){ 
    throw new Error("Método não disponível!");
    //axios.get("https://crm.org.br/{}", headers = { })
  }
}

module.exports = AgendamentoConsulta;
