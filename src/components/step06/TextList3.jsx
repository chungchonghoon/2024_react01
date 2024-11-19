import React from 'react';

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

// 리스트 렌더링에서는 반드시 유일한 값을 갖는 key가 필요합니다.
// filter : 원하는 것(조건에 부합하는 item)만 추출
function TextList3(props) {
    const chemist = people.filter((k) => {
     return k.profession == 'chemist'
    });

    // 필터로 걸러내고 다시 리스트를 만든다. 
    const ListItems = chemist.map((k) => {
       return <li key={k.id}>{k.name}</li>
    });

    return (
        <ul>
            {ListItems}
        </ul>
    );
}

export default TextList3;