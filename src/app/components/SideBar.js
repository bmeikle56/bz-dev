
function SideBar({ tabs }) {
  return (
    <div style={{
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      zIndex: 2,
    }}>
      <div style={{
        display: 'flex',
        position: 'absolute',
        zIndex: 2,
        // justifyContent: 'flex-start',
        // top: '30%',
        // bottom: '30%',
        // marginTop: '25vh',
        // marginBottom: '25vh',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        // marginTop: 'auto',
        marginRight: 'auto',

        // marginBottom: 'auto',
        // padding: '0 0 0 0',
        // background: 'red',
        width: 'fit-content',
        flexDirection: 'column',
        // margin: 'auto'
      }}>
        {tabs.map((tab, i) => {return <button key={tab.txt} className='tab-btn' onClick={tab.action}>
          <p className='tab'>{tab.txt}</p>
        </button>})}
      </div>
      <div style={{
        // display: 'flex',
        // flexGrow: 1,
        zIndex: 2,
        height: 100,
        width: 1,
        background: 'rgb(150,150,150)'
      }}></div>
    </div>
  )
}

export { SideBar }
