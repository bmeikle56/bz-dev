
/// Colored code palette matching VSCode's default
/// palette for JS
///
const ccode = {
  reserved: 'rgb(178, 111, 160)',
  lightblue: 'rgb(125, 183, 214)',
  darkblue: 'rgb(90, 137, 218)',
  lightyellow: 'rgb(205, 198, 156)',
  yellow: 'rgb(244, 216, 63)',
  salmon: 'rgb(199, 136, 108)',
  green: 'rgb(42, 121, 43)'
}

/// Colored code shared component
/// Callee will need to wrap the components
/// in a div with style 'block
///
function CCode({ txt, color }) {
  return (
    <div style={{display: 'inline'}}>
      <pre style={{display: 'inline', color: color, fontSize: 14}}>{txt}</pre>
    </div>
  )
}

export { ccode, CCode }
