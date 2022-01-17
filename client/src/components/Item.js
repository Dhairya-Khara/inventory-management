import React from 'react'
import { Link } from 'react-router-dom'


class Item extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.props.id
        }

    }

    getDate(unixTimestamp) {
        const dateObject = new Date(unixTimestamp)


        const month = dateObject.toLocaleString("en-US", { month: "long" })
        const day = dateObject.toLocaleString("en-US", { day: "numeric" })
        const year = dateObject.toLocaleString("en-US", { year: "numeric" })

        return month + " " + day + ", " + year
    }

    // getImage = async() =>{
    //     const url = "http://localhost:8080/getImage?id="+encodeURIComponent(this.props.props.id)
    //     const image = await fetch(url)
    //     console.log(await fetch(url))
    //     return await fetch(url)
    // }

    render() {
        return (
            <div>
                {/* <div>
                    <h3 className="list-item__title">{this.props.props.name}</h3>
                    <span className="list-item__sub-title">{this.getDate(this.props.props.createdAt)}</span>
                </div>
                <h3 className="list-item__data">{(this.props.props.stock)}</h3> */}

                <Link className="list-item" to={`/dashboard/edit/id=${this.state.id}`}>
                    <div>
                        <img src = {"http://localhost:8080/getImage?id="+encodeURIComponent(this.props.props.id)}></img>
                        <h3 className="list-item__title">{this.props.props.name}</h3>
                        <span className="list-item__sub-title">{this.getDate(this.props.props.createdAt)}</span>
                    </div>
                    <h3 className="list-item__data">{(this.props.props.stock)}</h3>
                </Link>
            </div>

        )
    }
}

export default Item