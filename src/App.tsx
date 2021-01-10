/* @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import ShogiBoard from './ShogiBoard';
import { css } from '@emotion/react'

function App() {
  type CoordinateType = {
    file: number | null,
    rank: number | null
  }

  const [targetCoordinate, setTargetCoordinate] = useState<CoordinateType>({
    file: null,
    rank: null
  });
  const [started, setStarted] = useState<boolean>(false);

  type HighlightType = {
    file: number,
    rank: number,
    color: string
  } | null
  const [highlight, setHighlight] = useState<HighlightType>(null);

  function answer(file: number, rank: number) {
    if (!started) {
      return
    }
    if (targetCoordinate.file === file && targetCoordinate.rank === rank) {
      setHighlight({
        file,
        rank,
        color: '#7fffff'
      })
      setTimeout(() => next(), 100)
    } else {
      setHighlight({
        file,
        rank,
        color: '#ff7f7f'
      })
    }
    setTimeout(() => setHighlight(null), 400)
  }

  function next() {
    setTargetCoordinate({
      file: 1 + Math.floor(Math.random() * 9),
      rank: 1 + Math.floor(Math.random() * 9)
    });
  }

  function start() {
    setStarted(true)
    next()
  }

  const kanjiNums = ['一', '二', '三', '四', '五', '六', '七', '八', '九']
  function toKanjiNumber(i: number) {
    return kanjiNums[i - 1]
  }

  return (
    <div>
      <div css={css`margin: 40px auto 16px`}>
        <ShogiBoard
          highlight={highlight}
          onCellClick={answer} />
      </div>
      <div css={css`text-align: center`}>
        {started ?
          <div css={css`font-size: 2em; font-weight: bold;`}>
            {targetCoordinate.file}{toKanjiNumber(targetCoordinate.rank!)}
          </div> :
          <div>
            <button onClick={start}>Start</button>
          </div>}
      </div>
    </div>
  );
}

export default App;
