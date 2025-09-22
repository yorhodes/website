import links from '../data/links.json';

function getChessUsername(): string | null {
  const chessLink = links.find(({ link }) => link.includes('chess.com'));
  if (!chessLink) return null;

  const match = chessLink.link.match(/chess\.com\/member\/([^/?]+)/);
  return match ? match[1] : null;
}

export interface ChessStats {
  timeControl: string;
  rating: number;
  link: string;
}

export async function getChessStats(): Promise<ChessStats | null> {
  const username = getChessUsername();
  if (!username) return null;

  try {
    const response = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
    const data = await response.json();
    const TIME_CONTROLS = ['bullet', 'blitz', 'rapid'];
    const sorted = TIME_CONTROLS.map((timeControl) => ({ timeControl, rating: data[`chess_${timeControl}`].last.rating })).sort();

    const maximum = sorted[sorted.length - 1];

    const link = `https://chess.com/member/${username}/stats/${maximum.timeControl}`;

    return { ...maximum, link };
  } catch (error) {
    console.error('Failed to fetch chess rating:', error);
    return null;
  }
}
