// /app/paper/page.jsx
import React from 'react'
import Link from 'next/link'
import mainStyles from '../main.module.css'
import styles from '../page.module.css'
import TopText_P from '../components/TopText_P'
import Header from '../components/Header_P'




export default function Projects_Detail() {

  return (
    <>
    <Header/>
    <section className={styles.top}>
        <div className={mainStyles.container}>
          <div className={styles.topInner}>
          
            <TopText_P/>
            <Link href='#introduce' className={styles.button}>Join Project</Link>
          </div>
        </div>
      </section>

      <section id='introduce' className={styles.introduce}>
        <div className={mainStyles.container}>
          <h2 className={styles.title}>Introduce Team</h2>
          <p className={styles.line}></p>
          <div className={mainStyles.introduceInner}>
          <p className={styles.text}><img className={styles.humanImg} src="./main/paper/human1.png" alt="" />여승철</p>
          <p className={styles.text}>담당 분야: 미정</p><br></br>
          <p className={styles.text}><img className={styles.humanImg} src="./main/paper/human2.png" alt="" />김명규</p>
          <p className={styles.text}>담당 분야: 미정</p><br></br>
          <p className={styles.text}><img className={styles.humanImg} src="./main/paper/human3.png" alt="" />전유병</p>
          <p className={styles.text}>담당 분야: 미정</p><br></br>
          <p className={styles.text}><img className={styles.humanImg} src="./main/paper/human4.png" alt="" />장재원</p>
          <p className={styles.text}>담당 분야: 미정</p>
      </div>
      </div>
      </section>

      <section id='mission' className={styles.mission}>
          <div className={mainStyles.container}>
          <h2 className={styles.title}>Mission</h2>
            <p className={styles.line}></p>
            <div className={mainStyles.missionInner}>
          <p className={styles.text}>- HTML, CSS를 이용한 마크업</p><br></br>
          <p className={styles.text}>- Javascript(ES6+)를 이용하여 동적 효과 구현</p><br></br>
          <p className={styles.text}>- Next.js를 이용하여 컴포넌트 기반 웹 구현</p><br></br>
          <p className={styles.text}>- MongoDB를 이용하여 CRUD 구현</p>
          </div>
          </div>
          
          </section>
      
          <section id='vision' className={styles.vision}>
          <div className={mainStyles.container}>
            <h2 className={styles.title}>Vision</h2>
          <p className={styles.line}></p>
          <div className={mainStyles.visionInner}>
          <p className={styles.text}>- 실제 사용할 웹을 개발해보며 웹 개발 경험을 쌓을 수 있다.</p><br></br>
          <p className={styles.text}>- Next.js의 구동 방식에 대하여 알 수 있다.</p><br></br>
          <p className={styles.text}>- 간단한 SNS를 만들어 볼 수 있다</p><br></br>
          </div>
          </div>
          
          </section>
      
          <section id='Tech_stack' className={styles.Tech_stack}>
          <div className={mainStyles.container}>
            <h2 className={styles.title}>Steck</h2>
          <p className={styles.line}></p>
          <div className={mainStyles.Tech_stackInner}>
            <div className={styles.Tech_stackList}>
              <img className={styles.Tech_stackImg} src="./main/paper/next.png" alt="" />
              <img className={styles.Tech_stackImg} src="./main/paper/tailwind.png" alt="" />
              <img className={styles.Tech_stackImg} src="./main/paper/js.png" alt="" />
              <img className={styles.Tech_stackImg} src="./main/paper/mongodb.png" alt="" />
            </div>
          </div>
          </div>
        </section>
        
      </>
  )
}