
const footerTabs = [
  {txt: 'Copyright @ 2024'},
  {txt: 'Careers'},
  {txt: 'LinkedIn', href: 'https://linkedin.com/in/bmeikle3'},
  {txt: 'Contact Us', href: 'mailto:braedenmeikle@gmail.com'},
]

function Footer() {
  return (
    <div style={{
      padding: '25px 19vw 0 19vw',
      display: 'flex', 
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }}>
      {footerTabs.map((tab, i) => {
        return tab.href == null 
        ? 
          <p key={i} style={{color:'rgb(150,150,150)', fontSize: '10px'}}>{tab.txt}</p>
        : 
          <a href={tab.href} target='_blank' rel='noreferrer' key={i}  style={{textDecoration: 'none'}}>
            <p style={{color:'rgb(150,150,150)', fontSize: '10px'}}>{tab.txt}</p>
          </a>
      })}
    </div>
  )
}

export { Footer }