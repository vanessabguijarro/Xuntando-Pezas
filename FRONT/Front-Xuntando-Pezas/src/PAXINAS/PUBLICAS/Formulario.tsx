const handleSubmit = async (e) => {
e.preventDefault();

const usuario = { nombre , correo , contraseña } ;

  try {

  const response = await fetch ('http://localhost:3001/api/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type: 'application/json',
    },
    body: JSON.stringfi(usuario),
  });

  const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
  }
};
