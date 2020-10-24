// Obtener la info traves de request.user.userRole
function permissions(...allowedRoles) {
  return (request, response, next) => {
    // Agregar la logica para validar el rol
    // ['admin'].includes('customer')
    // false
    const { user } = request;
    if (user && allowedRoles.includes(user.userRole)) {
      return next();
    }

    // HTTP Forbidden error
    return response.status(403).json({ message: 'Forbidden' });
  }
}

// exportar funcion
module.exports = permissions