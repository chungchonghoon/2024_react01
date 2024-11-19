import React from 'react';

function CourseItems({title, description, image}) {
    return (
        <article className="course">
            <img className="course__img" src={image} alt='강의이미지' style={{ width: "100px" }} />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
        </article>
    );
}

export default CourseItems;