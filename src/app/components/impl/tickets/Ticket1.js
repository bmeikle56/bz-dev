

// function TicketDesc() {
//   function BBullet({ txt }) {
//     function Bullet() {
//       const bulletStyle = {
//         height: '5px', 
//         width: '5px', 
//         background: 'rgb(220,220,220)',
//         borderRadius: '5px',
//         marginTop: '2px',
//         marginLeft: '15px'
//       }
  
//       return <div style={bulletStyle}></div>
//     }

//     return (
//       <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
//         <Bullet/>
//         <b style={{color: 'white', fontSize: '14px'}}>{txt}</b>
//       </div>
//     )
//   }

//   function DescTxt({ txt }) {
//     return <p style={{color: 'rgb(220,220,220)', fontSize: '14px'}}>{txt}</p>
//   }

//   function LoginDesign() {
//     function LoginField({ txt }) {
//       return (
//         <div style={{border: '1px solid rgb(26,26,26)', height: '18px', width: '120px', borderRadius: '4px'}}>
//           <p style={{color:'rgb(60,60,60)', position: 'absolute', margin: '5px 0 0 5px', fontSize: '8px'}}>{txt}</p>
//         </div>
//       )
//     }

//     function Decoration() {
//       const json = {
//         usr: 'brd',
//         pwd: '82$!'
//       }

//       return (
//         <div>
//           <pre style={{
//             fontSize: '8px',
//             color: 'rgb(160,160,160)', 
//             textShadow: '0px 0px 15px rgb(46, 190, 238), 0px 0px 12px rgb(46, 190, 238), 0px 0px 15px rgb(46, 190, 238)'
//           }}>
//             {JSON.stringify(json, null, 2)}
//           </pre>
//         </div>
//       )
//     }

//     return (
//       <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//         <Spacer height={'15px'}/>
//         <b style={{color: 'rgb(238, 0, 254)', textShadow: '0px 0px 12px rgb(222, 218, 218)', fontSize: '20px', marginBottom:8}}>Berzerk</b>
//         <Decoration/>
//         <Spacer height={'10px'}/>
//         <LoginField txt={'Email'}/>
//         <Spacer height={'5px'}/>
//         <LoginField txt={'Secure password'}/>
//         <Spacer height={'5px'}/>
//         <button style={{
//           border: 'none',
//           background:'rgb(238, 0, 254)', 
//           width: '120px',
//           height: '18px',
//           borderRadius: '4px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center'
//         }}>
//           <b style={{color: 'rgb(220,220,220)', fontSize: '8px'}}>Log in</b>
//         </button>
//         <Spacer height={'8px'}/>
//         <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
//           <p style={{color: 'rgb(220,220,220)', fontSize: '8px'}}>Don't have an account?</p>
//           <b style={{color: 'rgb(238, 0, 254)', fontSize: '8px', textShadow: '0px 0px 5px rgb(192, 191, 191)'}}>Create one</b>
//         </div>
//         <Spacer height={'20px'}/>
//         <CBList txt={'Golden image & unit tests'}/>
//         <CBList txt={'Code merged + pipeline succeeded'}/>
//       </div>
//     )
//   }

//   return (
//     <div style={{}}>
//       <DescTxt txt={'The login screen should allow users to enter'}/>
//       <BBullet txt={'email'}/>
//       <Spacer height={'3px'}/>
//       <BBullet txt={'secure password'}/>
//       <Spacer height={'5px'}/>
//       <LoginDesign/>
//       <Spacer height={'20px'}/>
//     </div>
//   )
// }

// export { Ticket1 }