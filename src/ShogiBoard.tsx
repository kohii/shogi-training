/* @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react'

type Props = {
	highlight: {
		file: number, // 筋
		rank: number,  // 段
		color: string
	} | null,
	onCellClick: ((file: number, rank: number) => void)
}

const cellWidth = 40
const cellHeight = 44

const translateXCoordinate = (index: number) => {
	return 9 - index
}

const translateYCoordinate = (index: number) => {
	return index + 1
}

type DotProps = {
	x: number,
	y: number
}

const Dot: React.FC<DotProps> = ({ x, y }) => {
	return <div css={css`
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #000;
    top: ${cellHeight * x - 2}px;
    left: ${cellWidth * y - 2}px;
  `}></div>
}

const ShogiBoard: React.FC<Props> = ({ highlight, onCellClick }) => (
	<div css={css`
    position: relative;
    * {
      box-sizing: border-box;
    }
    width: ${cellWidth * 9 + 1}px;
    margin: auto;
  `}>
		<table css={css`
      table-layout: fixed;
      border-collapse: collapse;
      border-spacing: 0;
    `}>
			<tbody>
				{[...Array(9)].map((e, y) => {
					return <tr key={y}>
						{[...Array(9)].map((e, x) => {
							return <td key={x}
								css={css`
                  background: ${highlight && (highlight.file === translateXCoordinate(x) && highlight.rank === translateYCoordinate(y)) ? highlight.color : '#ffefd5'};
                  width: ${cellWidth}px;
                  height: ${cellHeight}px;
                  border: solid 1px #000;
                  transition: background-color 0.2s linear;
                `}
								onClick={(ev) => onCellClick(translateXCoordinate(x), translateYCoordinate(y))}
							></td>
						})}
					</tr>
				})}
			</tbody>
		</table>
		<Dot x={3} y={3} />
		<Dot x={3} y={6} />
		<Dot x={6} y={3} />
		<Dot x={6} y={6} />
	</div>
);

export default ShogiBoard;
