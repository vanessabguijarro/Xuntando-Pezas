import React, { useState } from 'react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/contact', formData);
      console.log(res.data); // Puedes eliminar esta línea si no quieres mostrarlo en consola
      setStatus('¡Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario tras envío
    } catch (error) {
      console.error(error);
      setStatus('Error al enviar el mensaje');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Tu correo"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Tu mensaje"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Enviar</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
