/**
 * 
 * @param name This function prints out name
 */

export function helloWorld(name: {first: string; last: string}) {
    console.log(`Hello ${name.first} ${name.last}`);
}