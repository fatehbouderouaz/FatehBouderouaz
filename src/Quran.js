import React from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class Quran extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch("http://api.mp3quran.net/api/surah?surah=1&language=en")
            .then(response => response.json())
            .then(data => {
                 this.setState({
                     loading: false,
                     character: data
                 })
                //console.log(data)
            })
    }
    
    render() {
        const text = this.state.loading ? "loading..." : this.state.character.surah
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default Quran

   

