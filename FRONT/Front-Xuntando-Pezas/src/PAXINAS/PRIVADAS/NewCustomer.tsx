import { useState } from 'react';
import styles from './NewCustomer.module.css';
import ilustracion from '../../assets/customer-images/illustration.png';
import iconoPerfil from '../../assets/customer-images/profile.png';

interface DatosFormulario {
  nombre: string;
  apellidos: string;
  empresa: string;
  correo: string;
  profesion: string;
  rol: string;
}

const camposFormulario = [
  { id: 'nombre', etiqueta: 'Nombre', tipo: 'text' },
  { id: 'apellidos', etiqueta: 'Apellidos', tipo: 'text' },
  { id: 'empresa', etiqueta: 'Empresa', tipo: 'text' },
  { id: 'correo', etiqueta: 'Correo', tipo: 'email' },
  { id: 'profesion', etiqueta: 'Profesión', tipo: 'text' },
  { id: 'rol', etiqueta: 'Rol', tipo: 'text' }
] as const;

const SeccionImagenPerfil = ({ 
  imagenPerfil, 
  alCambiarImagen, 
  alEliminarImagen 
}: { 
  imagenPerfil: string | null;
  alCambiarImagen: (event: React.ChangeEvent<HTMLInputElement>) => void;
  alEliminarImagen: () => void;
}) => (
  <div className={styles.seccionPerfil}>
    <h2>Perfil</h2>
    <div className={styles.contenedorImagen}>
      {imagenPerfil ? (
        <img src={imagenPerfil} alt="Perfil" className={styles.imagenPerfil} />
      ) : (
        <div className={styles.imagenPredeterminada}>
          <img src={iconoPerfil} alt="Perfil Predeterminado" className={styles.iconoUsuario} />
        </div>
      )}
    </div>
    <div className={styles.botonesImagen}>
      <label className={styles.botonCambiar}>
        Cambiar foto
        <input
          type="file"
          accept="image/*"
          onChange={alCambiarImagen}
          style={{ display: 'none' }}
        />
      </label>
      <button
        type="button"
        onClick={alEliminarImagen}
        className={styles.botonEliminar}
      >
        Eliminar foto
      </button>
    </div>
  </div>
);

const NewCustomer = () => {
  const [imagenPerfil, setImagenPerfil] = useState<string | null>(null);
  const [datosFormulario, setDatosFormulario] = useState<DatosFormulario>({
    nombre: '',
    apellidos: '',
    empresa: '',
    correo: '',
    profesion: '',
    rol: ''
  });

  const manejarCambioImagen = (event: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = event.target.files?.[0];
    if (archivo) {
      const lector = new FileReader();
      lector.onloadend = () => setImagenPerfil(lector.result as string);
      lector.readAsDataURL(archivo);
    }
  };

  const manejarCambioInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDatosFormulario(prev => ({ ...prev, [name]: value }));
  };

  const manejarEnvio = () => {
    console.log('Datos del Formulario:', { ...datosFormulario, imagenPerfil });
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorFormulario}>
        <form onSubmit={manejarEnvio} className={styles.formulario}>
          <SeccionImagenPerfil
            imagenPerfil={imagenPerfil}
            alCambiarImagen={manejarCambioImagen}
            alEliminarImagen={() => setImagenPerfil(null)}
          />

          <div className={styles.camposFormulario}>
            {camposFormulario.map(({ id, etiqueta, tipo }) => (
              <div key={id} className={styles.grupoCampo}>
                <label htmlFor={id}>{etiqueta}</label>
                <input 
                  type={tipo}
                  id={id}
                  name={id}
                  value={datosFormulario[id]}
                  onChange={manejarCambioInput}
                />
              </div>
            ))}
          </div>
        </form>
      </div>
      <div className={styles.seccionDerecha}>
        <img 
          className={styles.ilustracion} 
          src={ilustracion} 
          alt="Ilustración" 
        />
        <button type="button" onClick={manejarEnvio} className={styles.botonEnviar}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default NewCustomer; 