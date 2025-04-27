import React, { useState } from 'react';
import './AxUsers.css';

interface User {
  name: string;
  email: string;
  status: 'Busy' | 'Free' | 'Workin' | 'On Vacation';
  role: string;
}

const UserForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    status: 'Free',
    role: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Usuario creado:', user);
    // Aquí podrías hacer un POST a la API o actualizar un estado global
    alert(`Usuario ${user.name} registrado exitosamente!`);
    setUser({ name: '', email: '', status: 'Free', role: '' });
  };

  return (
    <div className="axusers-container">
      <div className="axusers-header">
        <h1>Agregar Nuevo Usuario</h1>
      </div>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Estado</label>
          <select
            name="status"
            value={user.status}
            onChange={handleChange}
          >
            <option value="Busy">Busy</option>
            <option value="Free">Free</option>
            <option value="Workin">Workin</option>
            <option value="On Vacation">On Vacation</option>
          </select>
        </div>

        <div className="form-group">
          <label>Rol</label>
          <input
            type="text"
            name="role"
            value={user.role}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="axusers-add-btn">Guardar Usuario</button>
      </form>
    </div>
  );
};

export default UserForm;

