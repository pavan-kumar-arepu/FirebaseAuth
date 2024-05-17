export const getFontFamily = (baseFont = 'OpenSans', weight) => {
    switch(weight) {
        case '100':
            return `${baseFont}-Light`;
        case '200':
            return `${baseFont}-LightItalic`;
        case '300':
            return `${baseFont}-Medium`;
        case `400`:
            return `${baseFont}-MediumItalic`;
        case `500`:
            return `${baseFont}-Regular`;
        case `600`:
            return `${baseFont}-SemiBold`;
        case `700`:
            return `${baseFont}-SemiBoldItalic`;
        case `800`:
            return `${baseFont}-Bold`;
        case `900`: 
            return `${baseFont}-BoldItalic`;
        case `1000`:
            return `${baseFont}-ExtraBold`;
        default:
            return `${baseFont}-Regular`;
    }
}