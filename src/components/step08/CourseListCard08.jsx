import React from 'react';
import CourseItem08 from './CourseItem08';

function CourseListCard08({items}) {
    const [course1, course2, course3] = items;
    return (
        <div className="card">
            <div className="card__header">강의 목록</div>
            <div className="card__body">
                <div className="courses">
                    <CourseItem08 {...course1} />
                    <CourseItem08 {...course2} />
                    <CourseItem08 {...course3} />
                </div>
            </div>
        </div>
    );
}

export default CourseListCard08;