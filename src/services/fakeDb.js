export const fakeDb = {
  users: [
    {
      id: 1,
      name: "Eduardo Henrique Araújo Cordeiro",
      colabType: 0,
      userType: 0,
    },
    {
      id: 2,
      name: "Danilo",
      colabType: 0,
      userType: 0,
    },
    {
      id: 3,
      name: "Maurício",
      colabType: 0,
      userType: 1,
    },
    {
      id: 4,
      name: "Paulo",
      colabType: 1,
      userType: 2,
    },
    {
      id: 5,
      name: "Wanderson",
      colabType: 1,
      userType: 2,
    },
  ],
  colabTypes: [
    { id: 0, name: "Nenhum"},
    { id: 1, name: "Estação 1" },
    { id: 2, name: "Estação 2" },
  ],
  userTypes: [
    { id: 0, name: "Administrador" },
    { id: 1, name: "Supervisor" },
    { id: 2, name: "Colaborador" },
  ],
};
