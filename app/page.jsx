// app/page.jsx
import Link from 'next/link'
import TopText from './components/TopText'
import mainStyles from './main.module.css'
import styles from './page.module.css'
import Header from './components/Header.jsx'

export default function Home() {

  // const props = [
  // //   { href: '#about', label: 'About' },
  // //   { href: '#projects', label: 'Projects' },
  // //   { href: '#Tech_stack', label: 'Tech_stack' },
  // //   { href: '#contacts', label: 'Contacts' },
  // // ];
  return (
    <>
      
      <section className={styles.top}>
        <div className={mainStyles.container}>
          <div className={styles.topInner}>
          {/* <Header links={links}/> */}
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
                모의해킹, 취약점 분석
              </p>
              <h3 className={styles.subtitle}>
                현재 하고있는 공부
              </h3>
              <p className={styles.text}>
              Pwnable, Webhacking
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
              <p className={styles.text}>
              제5회 TS 보안 허점을 찾아라 우수상 수상
              </p>
              <h3 className={styles.subtitle}>
                취득 자격증
              </h3>
              <p className={styles.text}>
              침해사고대응전문가 2급
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
                <Link href="https://2023-2-weblecture-project-git-ysc-yeo99.vercel.app?_vercel_share=kMfV3NsTMu5REKzB4ppHCDrXUPPEWdNA">
                  <div className={styles.gridItemInner}>
                    <img src="./main/links/paper-link.jpg"/>
                    <h3 className={styles.projectTitle}>AMA Service</h3>
                    
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
              <div className={styles.gridItem}>
                <Link href="https://portfolio-bice-omega-36.vercel.app/">
                  <div className={styles.gridItemInner}>
                    <img src="./main/links/portfolio-link.jpg"/>
                    <h3 className={styles.projectTitle}>Portfolio</h3>
                  </div>
                </Link>
              </div>
              <div className={styles.gridItem}>
                <Link href="https://dapara-9bdfveo38-rlaaudrb1104.vercel.app/">
                  <div className={styles.gridItemInner}>
                    <img src="./main/links/dapara-link.jpg"/>
                    <h3 className={styles.projectTitle}>Dapara Shopping</h3>
                  </div>
                </Link>
              </div>
              <div className={styles.gridItem}>
                <Link href="https://crud-dusky-five.vercel.app/signIn">
                  <div className={styles.gridItemInner}>
                    <img src="./main/links/CRUD-link.jpg"/>
                    <h3 className={styles.projectTitle}>MongoDB CRUD</h3>
                  </div>
                </Link>
              </div>
              <div className={styles.gridItem}>
                <Link href="https://fluoridated-boa-f65.notion.site/e77a570eb1314c58874113f980ae6272?pvs=4">
                  <div className={styles.gridItemInner}>
                    <img src="./main/links/notion-link.jpg"/>
                    <h3 className={styles.projectTitle}>개인 공부 Notion</h3>
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
                <Link className={styles.contact} href='https://www.rlaaudrb1104.tstory.com' rel="noreferrer">
                <img className={styles.linkIcon} src="./main/contact/blog.png" alt="" />
                  <span className={styles.contactLink}>rlaaudrb1104@gmail.com</span>
                </Link>
              </li>
              
            
              
            </ul>
          </div>
        </div>
      </section>
      
    </>
  )
}
