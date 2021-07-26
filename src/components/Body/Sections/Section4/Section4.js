import React, { useEffect, useState } from "react";
import "./assets/css/section4.css";
import axios from "axios";

import { motion } from "framer-motion";

export default function Section4() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 1 },
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://notionhabits.herokuapp.com/books")
      .then(function (response) {
        setBooks(response?.data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section4">
      <h2>I read Books.</h2>

      <div className="section4-content">
        {!loading
          ? books?.map((book) => {
              return (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 2.5 }}
                  variants={variants}
                  whileHover={{ scale: 1.2, duration: 1.5 }}
                  className="book-card"
                  title={book.bookTitle}
                  onClick={() => alert(book?.id)}
                >
                  <picture>
                    <img src={book.cover} alt="cover_iamge" />
                  </picture>
                </motion.div>
              );
            })
          : "Loading...."}
      </div>
    </section>
  );
}
