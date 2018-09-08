export function changeValue(e) {
    console.log('changeValue')
    return {
        type: 'VALUE_CHANGED',
        payLoad: e.target.value
    }
}