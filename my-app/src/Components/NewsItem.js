import React, { Component } from 'react';

class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div className=" card my-3" style={{ width: "20rem" }}>
                <img src={!imageUrl ? "https://cdn.xxl.thumbs.canstockphoto.com/image-not-available-written-in-chalk-on-a-blackboard-stock-image_csp8317846.jpg" : imageUrl} style={{ height: '12rem', borderBottom: '1px solid #A49F26' }} className="card-img-top" alt="Image Loading" />
                <div className="card-body " >
                    <h5 className="card-title">{title ? title.slice(0, 45) : ''}...</h5>
                    <p className="card-text">{description ? description.slice(0, 88) : 'Read More'}...</p>

                    <p className="card-text fw-bold" ><i><small className="text-danger">By {!author ? 'Unknown' : author} </small></i></p>
                    <p className="card-text"><small className="text-muted">{new Date(date).toGMTString()} </small></p>

                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%' }}>{source}</span>

                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Click for Details</a>
                </div>
            </div >
        );
    }
}

export default NewsItem;
