import React from 'react';

import style from './Music.module.css';

import record from '../../assets/recordicon.gif';
import back from '../../assets/backplayericon.png';
import play from '../../assets/playplayericon.png';
import pause from '../../assets/pauseplayericon.png';
import next from '../../assets/nextplayericon.png';

const Music = (props) => {
    return (
        <div className={style.music}>
            <h2>Music</h2>

            <div className={style.musicPlayer}>
                <div>
                    <div>Now play</div>

                    <div className={style.musicName}>Name of music</div>

                    <div className={style.musicRecord}>
                        <img src={record} alt='record' />
                    </div>

                    <form className={style.range}>
                        <input type='range' />

                        <div>0:00 / 2:00</div>
                    </form>

                    <div className={style.buttons}>
                        <button>
                            <img src={back} alt='back' />
                        </button>

                        <button>
                            <img src={play} alt='play' />
                        </button>

                        <button>
                            <img src={next} alt='next' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Music;