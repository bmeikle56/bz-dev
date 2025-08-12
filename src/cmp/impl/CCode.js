
/// Colored code palette matching VSCode's default
/// palette for JS
///
const ccode = {
  white: 'rgb(225,225,225)',
  reserved: 'rgb(178, 111, 160)',
  lightblue: 'rgb(125, 183, 214)',
  darkblue: 'rgb(90, 137, 218)',
  lightyellow: 'rgb(205, 198, 156)',
  yellow: 'rgb(244, 216, 63)',
  salmon: 'rgb(199, 136, 108)',
  green: 'rgba(43, 207, 46, 1)',

}

/// Colored code shared component
/// Callee will need to wrap the components
/// in a div with style 'block
///
function CCode({ txt, color }) {
  return (
    <div style={{display: 'inline'}}>
      <pre style={{display: 'inline', color: color, fontSize: 13}}>{txt}</pre>
    </div>
  )
}

function BZCCode({ txt }) {
  return (
    <div style={{display: 'inline'}}>
      <pre style={{display: 'inline', whiteSpace: 'normal', color: 'rgb(238, 0, 254)', textShadow: '0px 0px 10px rgb(222, 218, 218)', fontSize: 13}}>{txt}</pre>
    </div>
  )
}

export { ccode, CCode, BZCCode }
