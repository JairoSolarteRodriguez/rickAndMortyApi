import './Character.css';

export const Character = ({id, name, species, status, gender, image}) => {

  return(
    <section className='card-caracter'>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <div className='info'>
        <p><span className='bold-text'>Especie: </span>{species}</p>
        <p className='flex-estado'><span className='bold-text'>Estado:</span> <span className={status === 'Alive'? 'alive' : status === 'unknown' ? 'unknown' : 'dead'}></span>{status}</p>
        <p><span className='bold-text'>Genero: </span>{gender}</p>
      </div>
    </section>
  )
}