import React from 'react';

// chk 값이 부모로부터 전달되지 않으면 false로 설정
function HeartIconBtn({ chk = false }) {
    
    function handleFavorite() {
        chk = !chk;
        alert(chk? "좋아요" : "좋아요 취소");
    }
    return(
        <button className='btn' onClick={handleFavorite}>
            <img className='btn_img' src={chk ? './img/heart-fill-icon.svg' : './img/heart-icon.svg'} />
        </button>
    );
}

function CourseItem08({title, description, image, isFavorite}) {
    return (
        <article className="course">
            <img className="course__img" src={image} alt='강의이미지' style={{ width: "100px" }} />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
            <div className='course_icons'>
                <HeartIconBtn chk={isFavorite} />
            </div>
        </article>
    );
}

export default CourseItem08;