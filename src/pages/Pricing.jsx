import React from 'react'

const Pricing = () => {

  const style = {
    body: {
      backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      height: '100vh'
    },
    h1: {
      color: 'rgb(183, 218, 228)'
    },
    box: {
      backgroundImage: 'url("anime-night-sky-illustration.jpg")',
      backgroundSize: 'cover',
      width: '600px',
      height: '225px',
      borderRadius: '5px',
      padding: '20px'
    },
    timers: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      fontWeight: '600',
      fontSize: 'larger'
    },
    timerDiv: {
      backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
      padding: '10px',
      borderRadius: '5%',
      marginTop: '20px'
    },
    progress: {
      fontSize: 'x-large',
      fontWeight: '600',
      marginTop: '10px',
      color: 'rgb(253, 253, 253)'
    },
    progressContainer: {
      backgroundColor: 'white',
      height: '10px',
      width: '100%',
      marginTop: '30px',
      borderRadius: '30px'
    },
    progressBar: {
      backgroundColor: 'rgb(43, 213, 91)',
      height: '100%',
      width: '0%',
      borderRadius: '30px'
    }
  }
  return (
    <div style={style.body}>
      <div style={style.box}>
      <h1 style={style.h1}>Time Remaining</h1>
      
      <div style={style.timers}>
        <div style={style.timerDiv}>
          <span id="days">00</span> Days
        </div>
        <div style={style.timerDiv}>
          <span id="hours">00</span> Hours
        </div>
        <div style={style.timerDiv}>
          <span id="mins">00</span> Mins
        </div>
        <div style={style.timerDiv}>
          <span id="secs">00</span> Secs
        </div>
      </div>

      <div id="progress" style={style.progress}>Limited Offer: $999</div>

      <div style={style.progressContainer}>
        <div style={style.progressBar}></div>
      </div>
    </div>
    </div>
  )
}

export default Pricing