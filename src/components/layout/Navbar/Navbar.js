import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <div>
            <nav className="w-3/4 m-auto pt-4">
                <hr className="pb-4"></hr>
                <div className="flex jutify-between text-sm">
                    <ul className="w-3/4 ms-0 flex gap-4 ">
                        <li>
                            <div className={styles.stylesdrpbtnBlog}>
                                <button className={styles.stylesdrpbtnBlog}>
                                    Blog Layout
                                    <i className="fa-sharp fa-solid fa-caret-down mx-3"></i>
                                </button>
                                <ul className={styles.droplistBlog}>
                                    <li>
                                        <a>classic-sidebar</a>
                                    </li>
                                    <li>
                                        <a>classic-2 coloumns</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <div className={styles.stylesdrpbtnCategory}>
                                <button className={styles.stylesdrpbtnCategory}>
                                    Category
                                    <i className="fa-sharp fa-solid fa-caret-down mx-3"></i>
                                </button>
                                <ul className={styles.droplistCategory}>
                                    {[
                                        "Fashion",
                                        "Music",
                                        "Looks",
                                        "Nature",
                                    ].map((item) => (
                                        <li>
                                            <a>{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="">
                                <button className="">About Me</button>
                            </div>
                        </li>
                        <li>
                            <div className="">
                                <button className="">Contact</button>
                            </div>
                        </li>
                        <li>
                            <div className="">
                                <button className="">Upgrade To Pro</button>
                            </div>
                        </li>
                    </ul>
                    <ul className={styles.soicalLinks}>
                        <li>
                            <i className="fa-brands fa-facebook-f"></i>{" "}
                        </li>
                        <li>
                            <i className="fa-brands fa-twitter"></i>{" "}
                        </li>
                        <li>
                            <i className="fa-brands fa-pinterest"></i>{" "}
                        </li>
                        <li>
                            <i className="fa-brands fa-dribbble"></i>{" "}
                        </li>
                        <li>
                            <i className="fa-solid fa-rss"></i>{" "}
                        </li>
                        <li>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
