
const toggledPalette = {
  border: 'rgb(100,100,100)',
  author: 'rgb(150,150,150)',
  text: 'rgb(255,255,255)',
  gray: 'rgb(50,50,50)',
  type: 'rgb(238, 0, 254)'
}

const untoggledPalette = {
  border: 'rgb(30,30,30)',
  author: 'rgb(80,80,80)',
  text: 'rgb(100,100,100)',
  gray: 'rgb(20,20,20)',
  type: 'rgb(147, 0, 158)'
}

/// This class is responsible for shared behavior and styling 
/// between the Work and Goal Items, such as the border and 
/// color palettes
///
function Shell({ body, isToggled, isMerging, onClick }) {
  const palette = isToggled ? toggledPalette : untoggledPalette

  return (
    <button style={{padding: 0, background: 'transparent', border: 'none'}} onClick={onClick}>
      <div style={{
        height: 'fit-content',
        width: 'fit-content',
        maxWidth: '400px',
        padding: '20px 20px 10px 20px',
        border: `1px solid ${palette.border}`, 
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      >
        {body({ isToggled, isMerging })}
      </div>
    </button>
  )
}

export { Shell }
