interface Props {
  onClick: () => void;
}

const BotonEnviar = ({ onClick }: Props) => {
  return (
    <button type="button" onClick={onClick}>
      Enviar
    </button>
  );
};

export default BotonEnviar;
