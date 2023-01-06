import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'
import ListItem from '../ListItem'
import './index.css'

class PlayList extends Component {
  state = {searchInput: '', updatedList: []}

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    const {initialTracksList} = this.props
    this.setState({updatedList: initialTracksList})
  }

  changeSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickDelete = id => {
    this.setState(prevState => ({
      updatedList: prevState.updatedList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {searchInput, updatedList} = this.state
    const newList =
      searchInput !== ''
        ? updatedList.filter(each =>
            each.name.toLowerCase().includes(searchInput.toLowerCase()),
          )
        : updatedList

    console.log(newList)
    return (
      <div className="container">
        <div className="top-container">
          <h1 className="heading">Ed Sheeran</h1>
          <p className="singer">Singer</p>
        </div>
        <div className="bottom-container">
          <div className="playlist-search-container">
            <h3 className="play-list-header">Songs Playlist</h3>
            <div className="search-container">
              <input
                type="search"
                className="search-input"
                value={searchInput}
                onChange={this.changeSearch}
                placeholder="Search"
              />
              <BiSearch />
            </div>
          </div>
          <ul className="list-item-container">
            {newList.length > 0 &&
              newList.map(each => (
                <ListItem
                  key={each.id}
                  item={each}
                  onClickDelete={this.onClickDelete}
                />
              ))}
            {newList.length === 0 && (
              <div className="no-video-container">
                <p>No Songs Found</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PlayList
