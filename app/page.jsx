
import Link from 'next/link'
import TopText from './components/TopText'
import mainStyles from './main.module.css'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      
      <section className={styles.top}>
        <div className={mainStyles.container}>
          <div className={styles.topInner}>
            <TopText/>
            <p className={styles.subTitle}>안녕하세요 김명규입니다.</p>
            <Link href='#contacts' className={styles.button}>Contact me</Link>
          </div>
        </div>
        
      </section>

      <section id='about' className={styles.about}>
        <div className={mainStyles.container}>
          <h2 className={styles.title}>About</h2>
          <p className={styles.line}></p>
          <div className={styles.aboutInner}>
            <div className={styles.aboutLeft}>
              <h3 className={styles.subtitle}>
                관심분야
              </h3>
              <p className={styles.text}>
                모의해킹, 침해대응
              </p>
              <h3 className={styles.subtitle}>
                현재 하고있는 공부
              </h3>
              <p className={styles.text}>
              Pwnable, Webheaking
              </p>
              <h3 className={styles.subtitle}>
                활동 이력
              </h3>
              <p className={styles.text}>
              K sheild jr. start up 수료
              </p>
              <p className={styles.text}>
              python-study(웹 크롤러 제작)
              </p>
              <p className={styles.text}>
              SCP 동아리 부원으로 활동 중 입니다.
              </p>
              <h3 className={styles.subtitle}>
                취득 자격증
              </h3>
              <p className={styles.text}>
              침해대응사고전문가 2급
              </p>
            </div>
          </div>
        </div>
      </section>
        
      <section id='projects' className={styles.projects}>
        <div className={mainStyles.container}>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.line}></p>
          <div className={styles.projectsInner}>
          <div className={styles.grid}>
          <div className={styles.gridItem}>
                <Link href="/main">
                  <div className={styles.gridItemInner}>
                    <img src="./main/links/paper-link.jpg"/>
                    <h3 className={styles.projectTitle}>롤링페이퍼 만들기</h3>
                    
                  </div>
                </Link>
              </div>
              <div className={styles.gridItem}>
                <Link href="https://clerk-delta.vercel.app/">
                  <div className={styles.gridItemInner}>
                    <img src="./main/links/clerk-link.jpg"/>
                    <h3 className={styles.projectTitle}>clerk Project</h3>
                  </div>
                </Link>
              </div>
          </div>
          </div>
        </div>
      </section>

      <section id='Tech_stack' className={styles.Tech_stack}>
        <div className={mainStyles.container}>
          <h2 className={styles.title}>Tech stack</h2>
          <p className={styles.line}></p>
          <div className={styles.Tech_stackInner}>
            <div className={styles.Tech_stackList}>
              <img className={styles.Tech_stackImg} src="./main/Tech_stack/html-skill.png" alt="" />
              <img className={styles.Tech_stackImg} src="./main/Tech_stack/css-skill.png" alt="" />
              <img className={styles.Tech_stackImg} src="./main/Tech_stack/js-skill.png" alt="" />
              <img className={styles.Tech_stackImg} src="./main/Tech_stack/react-skill.png" alt="" />
              <img className={styles.Tech_stackImg} src="./main/Tech_stack/next-skill.png" alt="" />
              <img className={styles.Tech_stackImg} src="./main/Tech_stack/python-skill.png" alt="" />

            </div>
          </div>
        </div>
      </section>

      <section id='contacts' className={styles.contacts}>
        <div className={mainStyles.container}>
          <h2 className={styles.title}>contacts</h2>
          <p className={styles.line}></p>
          <div className={styles.contactsInner}>
            <div className={styles.textSection}>
              <p className={styles.text}>
                
              </p>
            
            </div>
            <ul className={styles.contactsList}>
            
              <li>
                <Link className={styles.contact} href='https://github.com/rlaaudrb1104' rel="noreferrer">
                <img className={styles.linkIcon} src="./main/contact/github.png" alt="" />
                  <span className={styles.contactLink}>https://github.com/rlaaudrb1104</span>
                </Link>
              </li>
              <li>
                <Link className={styles.contact} href='https://www.instagram.com/myeonggyu1104' rel="noreferrer">
                <img className={styles.linkIcon} src="./main/contact/instagram.png" alt="" />
                  <span className={styles.contactLink}>https://www.instagram.com/myeonggyu1104</span>
                </Link>
              </li>
              <li>
                <Link className={styles.contact} href='https://www.rlaaudrb1104@gmail.com' rel="noreferrer">
                <img className={styles.linkIcon} src="./main/contact/gmail.png" alt="" />
                  <span className={styles.contactLink}>rlaaudrb1104@gmail.com</span>
                </Link>
              </li>
              <li>
                <Link className={styles.contact} href='https://rlaaudrb1104.tstory.com' target='a_blank' rel="noreferrer">
                <img className={styles.linkIcon} src="./main/contact/blog.png" alt="" />
                  <span className={styles.contactLink}>https://rlaaudrb1104.tstory.com</span>
                </Link>
              </li>

            
              
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
