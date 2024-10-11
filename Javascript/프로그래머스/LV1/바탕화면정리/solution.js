function solution(wallpaper) {
  const wallPaper = wallpaper.map(e => e.split(''))

  const cursor = {
    top: wallPaper.length,
    bottom: 0,
    left: wallPaper[0].length,
    right: 0,
  }
  //wallPaper배열을 완전탐색
  for (let x = 0; x < wallPaper.length; x++) {
    for (let y = 0; y < wallPaper[0].length; y++) {
      if (wallPaper[x][y] === '#') {
        // 바탕화면에 문서를 발견시 -> 드래그 해야할 범위 update
        cursor.top = Math.min(cursor.top, x)
        cursor.bottom = Math.max(cursor.bottom, x)
        cursor.left = Math.min(cursor.left, y)
        cursor.right = Math.max(cursor.right, y)
      }
    }
  }

  return [cursor.top, cursor.left, cursor.bottom + 1, cursor.right + 1]
}
//solution(['.#...', '..#..', '...#.'])
