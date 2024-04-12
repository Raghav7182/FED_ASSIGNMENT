import React, { useState } from 'react';
import Player from './Player'; 
import Playlist from './Playlist';
import song1 from '../components/Songs/song1.mp3';
import song2 from '../components/Songs/song2.mp3';
import song3 from '../components/Songs/song3.mp3';
import song4 from '../components/Songs/song4.mp3';
import song5 from '../components/Songs/song5.mp3';
import song6 from '../components/Songs/song6.mp3';
import song7 from '../components/Songs/song7.mp3';
import song8 from '../components/Songs/song8.mp3';
import song9 from '../components/Songs/song9.mp3';
import song10 from '../components/Songs/song10.mp3';
import song11 from '../components/Songs/song11.mp3';
import song12 from '../components/Songs/song12.mp3';
import song13 from '../components/Songs/song13.mp3';
import song14 from '../components/Songs/song14.mp3';
import song15 from '../components/Songs/song15.mp3';
import song16 from '../components/Songs/song16.mp3';
import song17 from '../components/Songs/song17.mp3';
import song18 from '../components/Songs/song18.mp3';

const MainSection = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [playlistVisible, setPlaylistVisible] = useState(false);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const stopSong = () => {
    setIsPlaying(false);
  };

  const songs = [
    { src: song1, cover: '/untilifoundyou.jpg', description: 'Until I Found You', duration: '2:55' },
    { src: song2, cover: '/tumsehi.jpeg', description: 'Pritam - Tum Se Hi', duration: '5:23' },
    { src: song13, cover: '/withoutme.jpg', description: 'Eminem - Without Me', duration: '4:44' },
    { src: song4, cover: '/jattdontcare.jpg', description: 'Sultan - Jatt Dont Care', duration: '2:33' },
    { src: song5, cover: '/letplay.jpg', description: 'Karan Aujla - Let Em Play', duration: '3:15' },
    { src: song6, cover: '/Case.jpg', description: 'Sultan - Lalkara', duration: '2:40' },
    { src: song7, cover: '/miamor.jpg', description: 'Sharn - Mi Amor', duration: '3:23' },
    { src: song8, cover: '/mynameis.jpg', description: 'Eminem - My Name Is', duration: '4:28' },
    { src: song9, cover: '/tujaanena.jpg', description: 'Atif Aslam - Tu Jaane Na', duration: '5:37' },
    { src: song10, cover: '/gymdeshokeen.jpg', description: 'Bhallwan - Gym De Shokeen', duration: '3:45' },
    { src: song11, cover: '/stillrollin.jpg', description: 'Shubh - Still Rollin', duration: '2:54' },
    { src: song12, cover: '/puffpuff.jpg', description: 'Sultan - Puff Puff Pass', duration: '4:51' },
    { src: song3, cover: '/shady.jpg', description: 'Eminem-The Real Slim Shady', duration: '4:51' },
    { src: song14, cover: '/notimeout.jpg', description: 'Big Ghuman- No Time Out', duration: '2:51' },
    { src: song15, cover: '/Case.jpg', description: 'Diljit Dosanjh - Case', duration: '2:15' },
    { src: song16, cover: '/softly.jpg', description: 'Karan Aujla - Softly', duration: '2:35' },
    { src: song17, cover: '/notimeout.jpg', description: 'Sultan - No Time Out', duration: '2:52' },
    { src: song18, cover: '/stillrollin.jpg', description: 'Shubh - Cheques', duration: '3:03' },
    
  ];
return (
  
  <div style={{ display: 'flex', paddingTop: '50px',paddingLeft:'20px', fontFamily: 'Roboto, sans-serif' }}>
    <div style={{marginRight:'40px',marginTop:'40px',position:'fixed'}}className='flex flex-col gap-3'>
            <div className='font-bold text-gray-400'>Browse</div>
            <div className='flex flex-col pl-9 gap-2'>
              <li className='list-none font-semibold text-gray-700'>New Releases</li>
              <li className='list-none font-semibold text-gray-700'>Top Charts</li>
              <li className='list-none font-semibold text-gray-700'>Top Playlists</li>
              <li className='list-none font-semibold text-gray-700'>Podcasts</li>
              <li className='list-none font-semibold text-gray-700'>Top Artists</li>
              <li className='list-none font-semibold text-gray-700'>Radio</li>
            </div>
            <div className='font-bold text-gray-400'>Library</div>
            <div className='flex flex-col pl-9 gap-2'>
              <li className='list-none font-semibold text-gray-700'>History</li>
              <li className='list-none font-semibold text-gray-700'>Liked Songs</li>
              <li className='list-none font-semibold text-gray-700'>Albums</li>
              <li className='list-none font-semibold text-gray-700'>Podcasts</li>
              <li className='list-none font-semibold text-gray-700'>Artists</li>             
            </div>
          </div>
      
    <div style={{width: '20%', marginRight: '50px',marginLeft:'170px' }}>
      <button style={{
        marginTop:'35px',  
            marginBottom: '20px',
            width: '100%',
            padding: '10px',
            fontSize: '18px',
            backgroundColor: '#3BE4AE',
            color: 'black',
            border: 'none',
            borderRadius: '15px',
            cursor: 'pointer', }} onClick={() => setPlaylistVisible(!playlistVisible)}>
        {playlistVisible ? 'Hide My Playlist' : 'My Playlist'}
      </button>
      {playlistVisible && <Playlist songs={songs} playSong={playSong} />}
    </div>
    <div style={{ width: '80%' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '40px', marginTop: '40px', fontWeight: 'bolder',textAlign:'center' }}>TRENDING NOW</h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap',marginBottom:'40px' }}>
        {songs.map((song, index) => (
          <div key={index} onClick={() => playSong(song)}>
            <img
              src={song.cover}
              alt="cover"
              style={{ width: '180px', height: '180px', cursor: 'pointer', borderRadius: '5px' }}
            />
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{song.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Player currentSong={currentSong} isPlaying={isPlaying} stopSong={stopSong} />
  </div>
);
};

export default MainSection;
