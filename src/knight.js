const knightMoves = (start, end) =>{
    if(!validCoord(start) || !validCoord(end)){
        throw new Error ("Start and End must be within [0, 0] to [7, 7]");
    }

    const directions = [
        [1, 2], [2, 1], [2, -1], [1, -2],
        [-1, -2], [-2, -1], [-2, 1], [-1, 2],
    ];

    const visited = new Set();
    const queue = [{ position: start, path: [start]}];
    visited.add(coordKey(start));

    while(queue.length > 0){
        const {position, path} = queue.shift();
        if(position[0] === end[0] && position[1] === end[1]){
            return path;
        }

        for(const [dx, dy] of directions){
            const next = [position[0] + dx, position[1] + dy];
            if(validCoord(next) && !visited.has(coordKey(next))){
                visited.add(coordKey(next));
                queue.push({position: next, path: [...path, next]});
            }
        }
    }
    return null;
};

const validCoord = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;
const coordKey = ([x, y]) => `${x},${y}`;

export {knightMoves};