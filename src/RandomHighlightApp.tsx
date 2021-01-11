/* @jsxImportSource @emotion/react */
import React from 'react';
import ShogiBoard from './ShogiBoard';
import { css } from '@emotion/react'

type CoordinateType = {
  file: number | null,
  rank: number | null
}
type State = {
  targetCoordinate: CoordinateType,
  started: boolean,
  interval: number
}

class RandomHighlightApp extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      targetCoordinate: {
        file: null,
        rank: null
      },
      started: false,
      interval: 1000
    }
  }

  render() {
    return (
      <div>
        <div css={css`margin: 40px auto 16px`}>
          <ShogiBoard
            highlight={this.state.targetCoordinate ? {
              file: this.state.targetCoordinate.file!,
              rank: this.state.targetCoordinate.rank!,
              color: '#7fffff'
            } : null} />
        </div>
        <div css={css`text-align: center`}>
          {this.state.started ?
            <div></div> :
            <div>
              <button onClick={this.start.bind(this)}>Start</button>
            </div>}
          <input
            type="number"
            pattern="\d*"
            value={this.state.interval}
            onChange={(ev) => this.setState({ interval: +ev.target.value })}
            css={css`
                  width: 100px;
                `} /> ms
        </div>
      </div>
    )
  }

  start() {
    this.setState((state) => ({
      started: true
    }))
    this.next()
  }

  next() {
    this.setState((state) => ({
      targetCoordinate: {
        file: 1 + Math.floor(Math.random() * 9),
        rank: 1 + Math.floor(Math.random() * 9)
      }
    }))
    setTimeout(() => this.next(), this.state.interval)
  }
}

export default RandomHighlightApp;
