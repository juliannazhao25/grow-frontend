/* eslint-disable react/button-has-type */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAudioPlayer } from 'react-use-audio-player'

const AudioPlayer = ({ file }) => {
  const history = useHistory()

  const handleSubmit = () => {
    history.push({
      pathname: '/zhuangzi',
    })
  }

  const {
    togglePlayPause, ready, loading, playing,
  } = useAudioPlayer({
    src: file,
    format: 'mp3',
    autoplay: true,
    onend: () => handleSubmit(),
  })

  if (!ready && !loading) return <div>No audio to play</div>
  if (loading) return <div>Loading audio</div>

  return (
    <div>
      <button onClick={togglePlayPause}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  )
}

export default AudioPlayer
