import './App.css';
import CourseListCards from './components/step04/CourseListCards';
import PackingList from './components/step05/PackingList';
import TextList from './components/step06/TextList';
import TextList2 from './components/step06/TextList2';
import TextList3 from './components/step06/TextList3';
import Event01 from './components/step07/Event01';
import Event02 from './components/step07/Event02';



function App() {
  const items = [
    {
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      image: './img/tree-1.jpg',
      isFavorite : true
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      image: './img/tree-2.jpg',
      isFavorite : false
      
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      image: './img/tree-3.jpg',
      isFavorite : true
    }
  ]
  // 조건부 렌더링 : if, &&, 삼항연산자(조건식 ? 참:거짓)
  const ischk = false;
  return (
    <>
      {ischk ? <h2>Hello, react</h2> : <CourseListCards items={items} />}
      <hr />
      <PackingList />
      <hr />
      <h1> 키가 없어 콘솔에 오류 발생</h1>
      <TextList />
      <hr />
      <h1> 키가 존재 함</h1>
      <TextList2 />
      <hr />
      <TextList3 />
      <hr />
      <Event01 />
      <hr />
      <Event02 />
      
      <br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
}

export default App;
