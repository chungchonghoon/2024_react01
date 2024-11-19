import React from 'react';
import CourseItems from './CourseItems';


function CourseListCards({items}) {
    const [course1, course2, course3] = items;
    return (
        <div className="card">
            <div className="card__header">강의 목록</div>
            <div className="card__body">
                <div className="courses">
                    <CourseItems {...course1} />
                    <CourseItems {...course2} />
                    <CourseItems {...course3} />
                </div>
            </div>
        </div>
    );
}

export default CourseListCards;