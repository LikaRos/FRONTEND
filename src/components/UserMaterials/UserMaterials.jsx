import { books,links } from 'components/data/useFull-info';
import PropTypes from 'prop-types'
import s from './UserMaterials.module.css';


const UserMaterials = props => {
  return (
    <div className={s.container}>
      <div>
        <h3 className={s.title}>Useful literature</h3>
       
        <ul className={s.list}>
          {books && books.map((item, index )=> (
            <li key={index + 1}>
              <p className={s.text}>{index + 1}. {item.name}</p>
            </li>
          ))}
          </ul>
      </div>

      
      <div>
        <h3 className={s.title}>Useful resources</h3>
        <ul className={s.list}>
          {links && links.map((item, index) => (
            <li key={index + 1}>
              <a
                className={s.text}
                target="_blank"
                href={item.link}>
                {index + 1}. {item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

UserMaterials.propTypes = {}

export default UserMaterials