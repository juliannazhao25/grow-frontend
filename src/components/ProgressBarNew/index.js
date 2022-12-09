import React from 'react'
import SmolMountain from '../../assets/Mountain.svg'

const ProgressBar = props => {
  const { number, completed } = props
  const containerStyles = {
    height: 50,
    width: 250,
    backgroundColor: '#AA280E',
    borderRadius: 5,
    marginLeft: '7vh',
    marginTop: '2vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  }

  const fillerStyles = {
    height: 50,
    width: `${completed}%`,
    backgroundColor: '#CA7B6C',
    borderRadius: 'inherit',
    textAlign: 'left',
  }

  const labelStyles = {
    fontSize: '25px',
    color: 'white',
    width: 'fit-content',
    fontFamily: 'Roboto Bold',
    position: 'absolute',
    paddingLeft: 15,
    height: 50,
    display: 'flex',
    justifyContent: 'center',

  }
  return (
    <div style={containerStyles}>
      <span style={labelStyles}>
        <p style={{ paddingTop: '12px' }}>{`${number}/30`}</p>
        <img
          style={{
            width: '40px', height: 'fit-content', marginLeft: '7px', paddingTop: '5px',
          }}
          src={SmolMountain}
          alt="Mountain Icon"
        />
      </span>
      <div style={fillerStyles} />
    </div>
  )
}

export default ProgressBar
