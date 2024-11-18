import './App.css';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
import CourseListCard from './components/course/CourseListCard';
import Library from './components/step01/Library';

/*
function Header() {
  return(
    <header>
      <h2>Header</h2>
    </header>
  );
}

function Footer() {
  return(
    <footer>
      <h2>Footer</h2>
    </footer>
  );
}

function Main() {
  return(
    <main>
      <Counter/>
    </main>
  );
}



// 파스칼 케이스 사용해야 된다.(첫글자 대문자 단어 첫글자 대문자)
function Counter() {
  return(
    <button>Counter</button>
  );
}
*/

// 리액트에서는 class 는 예약어이기 때문에 사용못하고,
// class 대신 className 이라고 사용한다.
function App() {
  return (
    <div>
    {/* 
      <main>
      <Header />
      <Main />
      <Footer />

                1 단계 --> <main> 통째로 가져다가 부치기
                <main>
            <div class="card">
              <div class="card__header">강의 목록</div>
              <div class="card__body">
                <div class="courses">
                  <article class="course"> 2단계 --> artlcle 부분만 끄집어 내자
                    <img class="course__img" src="./img/coffee-blue.jpg" alt="" />
                    <div class="course__body">
                      <div class="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
                      <div class="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
                    </div>
                  </article> 
                  <article class="course">
                    <img class="course__img" src="./img/coffee-blue.jpg" alt="" />
                    <div class="course__body">
                      <div class="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
                      <div class="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
                    </div>
                  </article>
                  <article class="course">
                    <img class="course__img" src="./img/coffee-blue.jpg" alt="" />
                    <div class="course__body">
                      <div class="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
                      <div class="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </main>
    
      2단계 CourseListCard.jsx 에 보낸다.
      <div className="card">
        <div className="card__header">강의 목록</div>
        <div className="card__body">
          <div className="courses">
            <Courseitem />
            <Courseitem />
            <Courseitem /> 
            
          
          </div>
        </div>
      </div> 
      
      3 단계 <CourseListCard />
      </main> 
      */}
      
    
      <Library />
      
      </div>
  );
}

export default App;


// App.js가 길어지므로 function 하나하나 나눠서 사용한다.
// 기본적으로 src 안에 components 폴더를 만든다.
// 좀더 효율적으로 코디하기 위해서
// 확장 프로그램 설치 : Auto Rename Tag,
// Reactjs ode snippets => 리액트 코드를 편하게 자동완성 해주는 확장 프로그램
// rsf => 컴포넌트 선언식
// rsc => 컴포넌트 표현식(화살표 함수)
