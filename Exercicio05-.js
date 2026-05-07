const desenvolvedor = {
  nome: "Carlos",
  cargo: "Dev Full Stack",
  tecnologias: ["JavaScript", "React", "Node.js"]
};

function adicionarTecnologia(dev, novaTecnologia) {
  if (!dev.tecnologias.includes(novaTecnologia)) {
    dev.tecnologias.push(novaTecnologia);
    return dev.nome + " agora tem " + novaTecnologia + " nas suas tecnologias";
  } else {
    return dev.nome + " já possui " + novaTecnologia + " nas suas tecnologias";
  }
}