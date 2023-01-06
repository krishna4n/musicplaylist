import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const ListItem = props => {
  const {item, onClickDelete} = props

  const onDelete = () => {
    onClickDelete(item.id)
  }

  return (
    <li className="item-container">
      <div className="left-content">
        <img src={item.imageUrl} alt="track" className="track-image" />
        <div className="">
          <p>{item.name}</p>
          <p className="genre">{item.genre}</p>
        </div>
      </div>
      <div className="right-content">
        <p className="duration">{item.duration}</p>
        <button type="button" className="delete-button" onClick={onDelete}>
          <AiOutlineDelete color="#ffffff" />
        </button>
      </div>
    </li>
  )
}

export default ListItem
