
/* do not use! */ 

/// documentation and business requirements

// clarify or mark source comments



/// Spacing guidelines
///   file -- 1 empty line at the top and bottom
///   tab -- 2 spaces



/// Example JS file
/// -------------- FILE BEGINS --------------

/// [1] -- random imports
import '@fortawesome/fontawesome-free/css/all.min.css'

/// [2] -- JS imports
import { motion } from 'framer-motion'

/// [3] -- component barrel import
import { Pfp } from '../components/Components'

/// [4] -- make the components!
function SomeComponent() {
  return (
    // the component...
    <div/>
  )
}

/// [5] -- export page
export default function SomePage() {
  return (
    <div>
      <SomeComponent/>
    </div>
  )
}
