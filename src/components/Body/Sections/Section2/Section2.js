import React, { useEffect, useState } from "react";
import "./assets/css/section2.css";
import axios from "axios";


export default function Section1() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dev.to/api/articles?username=atulbhattsystem32")
      .then(function (response) {
        setBlogs(response.data);
        console.log(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="section2">
      {!loading
        ? blogs.map((blog) => {
            return (
              <div className="blog-card">
                <picture>
                  <img src={blog.cover_image} alt="cover_iamge" />
                </picture>
                <h2>{blog.title.slice(0, 25)}...</h2>
                <div className="post-stats">
                  <div className="icon-stat">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#dc1818"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="ankf701ntdqqxptuy1n78o1veh2oojn1"
                      class="crayons-icon reaction-image mx-1 my-1 reaction-icon--like"
                    >
                      <title id="ankf701ntdqqxptuy1n78o1veh2oojn1">Like</title>
                      <path d="M2.821 12.794a6.5 6.5 0 017.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 019.193 9.192L12 22l-9.192-9.192.013-.014z"></path>
                    </svg>
                    <span className="postreact">
                      {blog.positive_reactions_count}
                    </span>
                  </div>
                  <div className="icon-stat">
                    <svg
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 16 16"
                      class="bi bi-chat"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                      ></path>
                    </svg>
                    <span className="postcomment"> {blog.comments_count}</span>
                  </div>
                    <span className = "postdate" title = "published date">{blog.readable_publish_date}</span>
                    <span className = "postreadtime" title = "reading time">{blog.reading_time_minutes} min read</span>
                </div>
              </div>
            );
          })
        : "Loading...."}
    </div>
  );
}
