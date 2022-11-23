export function posEqual(pos:Array<number>, target:Array<number>, range:number):Boolean{
    // console.log(pos);
    // console.log(target);
    // console.log(range);
    // console.log(Math.pow((target[1] - pos[1]), 2));
    // console.log(Math.pow((target[0] - pos[0]), 2));
    return Math.pow(range, 2) > Math.pow((target[1] - pos[1]), 2) + Math.pow((target[0] - pos[0]), 2);
}