import { knightMoves } from "./knight.js";

const from = [0, 0];
const to = [4, 3];

try{
    const path = knightMoves(from, to);
    console.log(`You made it in ${path.length -1} moves! Here's your path:`);
    path.forEach(coord => console.log(`[${coord[0]}, ${coord[1]}]`));
    }
    catch (err){
        console.log("Error:", err.message);
    }