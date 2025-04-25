import React, { useEffect, useState } from 'react'; 

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const ListaDeUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/api/users') // Cambia esta URL si es necesario
      .then(response => response.json())
      .then(data => {
        setUsuarios(data);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error al cargar usuarios:', error);
        setCargando(false);
      });
  }, []);

  if (cargando) return <div>Cargando usuarios...</div>;

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.name}</strong> - {usuario.email} ({usuario.age} años)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeUsuarios;

