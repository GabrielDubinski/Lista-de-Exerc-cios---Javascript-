function validarAcesso(token, administrador, permissaoEspecial) {
  if (token && (administrador || permissaoEspecial)) {
    return "Acesso permitido";
  } else {
    return "Acesso negado";
  }
}