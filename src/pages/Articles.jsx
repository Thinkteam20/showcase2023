import React, { useEffect } from "react";
import "./styles/Article.css";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import myArticles from "../data/articles";
import { INFO } from "../data/user";
import Article from "../components/Article";

export default function Articles(props) {
    useEffect(() => {
        document.title = `Articles | ${INFO.main.title}`;
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <div className='page-content'>
                <NavBar active='articles' />
                <div className='content-wrapper'>
                    <div className='articles-main-container'>
                        <div className='title articles-title'>
                            {INFO.articles.title}
                        </div>

                        <div className='subtitle articles-subtitle'>
                            {INFO.articles.description}
                        </div>

                        <div className='articles-container'>
                            <div className='articles-wrapper'>
                                {myArticles.map((article, index) => (
                                    <div
                                        className='articles-article'
                                        key={(index + 1).toString()}
                                    >
                                        <Article
                                            key={(index + 1).toString()}
                                            date={article().date}
                                            title={article().title}
                                            description={article().description}
                                            link={"/article/" + (index + 1)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='page-footer'>
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
