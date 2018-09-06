import React from "react";
import { connect } from "react-redux";

const imgStyle = {
  hight: "auto",
  width: "80%",
  border: "4px solid RebeccaPurple ",
  borderRadius: "5%"
};
const articleStyle = {
  width: "50%",
  margin: "0 auto",
  color: "olive"
};

let NewsItem = ({ article }) => {
  console.log("NewsItems : ", article);
  return article
    ? article.map(art => (
        <article style={articleStyle}>
          <div>
            <h1>{art.title}</h1>
            <img style={imgStyle} src={art.urlToImage} alt="" />
            <h4>{art.description}</h4>
            <a href={art.url} target="_blank">
              READ MORE
            </a>
          </div>
        </article>
      ))
    : null;
};

const mapStateToProps = state => ({
  article: state.news
});

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem);
export default NewsItem;
