import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriceMePrompts.length)
    const randomPrompt = surpriceMePrompts[randomIndex]

    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt;
}