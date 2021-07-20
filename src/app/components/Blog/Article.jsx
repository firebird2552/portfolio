import React from "react";

export const Article = ({ article, title }) => {
  const ParseArticle = () => {
    const GenerateTags = (string) => {
      if (string.includes("img:")) {
        console.log("String", string);
        let imgUrl = "";
        if (string.includes("{")) {
          let imgJson = JSON.parse(string.slice(4, string.length));
          console.log("json", imgJson);
          return (
            <div key={imgJson.url} className="article-img">
              <img
                src={imgJson.url}
                width={imgJson.width}
                height={imgJson.height}
                style={{
                  float: imgJson.side === "right" ? "right" : "left",
                }}
                alt="image representing article segment"
              />
            </div>
          );
        } else {
          imgUrl = string.slice(0, string.length);

          return (
            <div key={imgUrl} className="article-img">
              <img src={imgUrl} alt="image representing article segment" />
            </div>
          );
        }
      } else {
        return (
          <p className="article-text" key={string.slice(0, 10)}>
            {string}
          </p>
        );
      }
    };

    const postArray = article.split(" ");
    const parsedArray = [""];

    let lastTextImg = false;

    for (let i = 0; i < postArray.length; i++) {
      if (!postArray[i].includes("img:")) {
        if (!lastTextImg) {
          parsedArray[parsedArray.length - 1] += " " + postArray[i];
        } else {
          parsedArray.push(postArray[i]);
        }
        parsedArray[parsedArray.length - 1] =
          parsedArray[parsedArray.length - 1].trim();
        lastTextImg = false;
      } else {
        parsedArray.push(postArray[i]);
        lastTextImg = true;
      }
    }
    let tags = [];
    parsedArray.forEach((element) => {
      tags.push(GenerateTags(element));
    });

    return tags;
  };

  return ParseArticle();
};
