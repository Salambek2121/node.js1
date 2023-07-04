import os from 'os'
export function string (text){
    return `${text} ${os.type}`
}
