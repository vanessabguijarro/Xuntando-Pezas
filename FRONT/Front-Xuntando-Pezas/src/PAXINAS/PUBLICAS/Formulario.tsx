const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const contraseña = 'defaultPassword'; // Replace with the actual value or logic
  const nombre = 'defaultName'; // Replace with the actual value or logic
  const correo = 'defaultEmail@example.com'; // Replace with the actual value or logic
  const usuario = { nombre, correo, contraseña };

  try {
    const response = await fetch('http://localhost:3001/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario), // Corrección aquí
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
  }
};

export default function Formulario() {
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Enviar</button>
    </form>
  );
}
