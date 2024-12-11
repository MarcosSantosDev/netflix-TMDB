/* eslint-disable prettier/prettier */
import * as React from 'react';

import clsx from 'clsx';

import { Icon } from '@/components/ui';
import { Movie } from '@/features/home/services/@types/home.types';

import MovieListItem from './MovieListItem';

type ArrowIconProps = React.PropsWithChildren & {
	direction: 'left' | 'right';
	onClick: () => void;
};

function ArrowIcon({ direction = 'left', onClick }: ArrowIconProps) {
	return (
		<div
			className={clsx(
				'absolute z-50 flex h-240 w-40 cursor-pointer items-center justify-center bg-black/60 opacity-0',
				'transition-all duration-500',
				'group-hover:opacity-100',
				{
					'left-0': direction === 'left',
					'right-0': direction === 'right',
				}
			)}
			onClick={onClick}
		>
			<Icon
				className="overflow-hidden text-neutral-1"
				name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
				size="xl"
			/>
		</div>
	);
}

type MovieListProps = {
	title: string;
	movies: Movie[];
};

function MovieList({ title, movies }: MovieListProps) {
	const [scrollX, setScrollX] = React.useState(-400);

	const countMovies = movies.length;
	const widthList = countMovies * 160 + 40;

	const handleClickLeftArrow = () => {
		let x = scrollX + Math.round(window.innerWidth / 2);
		if (x > 0) {
			x = 0;
		}
		setScrollX(x);
	};

	const handleClickRightArrow = () => {
		let x = scrollX - Math.round(window.innerWidth / 2);
		const listW = countMovies * 160;
		if (window.innerWidth - listW > x) {
			x = window.innerWidth - listW - 40;
		}
		setScrollX(x);
	};

	return (
		<div className="group relative select-none">
			<h2 className="pl-20 text-xl text-neutral-1">{title}</h2>
			<ArrowIcon
				direction="left"
				onClick={handleClickLeftArrow}
			/>
			<ArrowIcon
				direction="right"
				onClick={handleClickRightArrow}
			/>
			<div
				className="overflow-x-hidden px-20 transition-all duration-500"
				style={{ width: widthList, marginLeft: scrollX }}
			>
				{movies.map((movie) => (
					<MovieListItem
						key={movie.id}
						movie={movie}
					/>
				))}
			</div>
		</div>
	);
}

export default MovieList;
