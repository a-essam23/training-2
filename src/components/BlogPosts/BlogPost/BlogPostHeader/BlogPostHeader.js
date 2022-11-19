import styled from "styled-components";

const ThisComponent = styled.header`
     {
        font-weight: bold;
        padding-block: var(--medium-padding);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--small-gap);
    }

    & > .heading {
        font-size: 2rem;
        text-align: center;
        transition: color var(--normal-transition);
    }

    & > .heading:hover {
        color: var(--primary-color-1);
    }

    & > div {
        display: flex;
        gap: var(--small-gap);
    }

    & > div > .comments {
        color: var(--primary-color-1);
        display: flex;
        gap: var(--extra-small-gap);
        transition: color var(--normal-transition);
    }

    & > div > .comments:hover {
        color: unset;
    }
`;

export default function BlogPostHeader({ cat = "Category", heading = "Heading", date = "January 01, 2000", comments = [] }) {
    return (
        <ThisComponent>
            <a href="#" className="category">
                {cat}
            </a>
            <h3 className="heading">
                <a href="#">{heading}</a>
            </h3>
            <div>
                <p className="date" title="Date">
                    {date}
                </p>
                <a href="#" className="comments" title="Comments">
                    <i className="fa-regular fa-comments"></i>
                    {comments.length}
                </a>
            </div>
        </ThisComponent>
    );
}
